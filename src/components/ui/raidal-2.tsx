"use client";
import React, { useEffect, useRef } from "react";


const SHADER_SRC = `#version 300 es
precision highp float;

out vec4 fragColor;
in vec2 v_uv;

uniform vec3  iResolution;   // (width, height, dpr)
uniform float iTime;         // seconds
uniform int   iFrame;        // frame counter
uniform vec4  iMouse;        // (x, y, L, R)

void mainImage(out vec4 fragColor, in vec2 fragCoord)
{
    vec2  r  = iResolution.xy;
    float t  = iTime;
    vec3  FC = vec3(fragCoord, t);
    vec4  o  = vec4(0.0);

    vec2 p = FC.xy - r * 0.5;

    for (float i, a; i++ < 9.0; )
    {
        // denom: max(a = i*i/80 - length(p)/r.y, -a*3.) + 2./r.y
        a = (i * i) / 80.0 - length(p) / r.y;
        float denom = max(a, -a * 3.0) + 2.0 / r.y;

        // smoothstep(a = cos(i - t), 2., cos(a = atan(p.y,p.x) + a + i*i))
        a = cos(i - t);
        float edge0 = a;
        float edge1 = 2.0;
        a = atan(p.y, p.x) + a + i * i;
        float sm = smoothstep(edge0, edge1, cos(a));

        // o += .03/denom * sm * (1.2 + sin(a + i + vec4(0,2,4,0)))
        o += 0.03 / denom * sm * (1.2 + sin(a + i + vec4(0.0, 2.0, 4.0, 0.0)));
    }

    o = tanh(o);
    fragColor = vec4(o.rgb, 1.0);
}

void main(){
  mainImage(fragColor, gl_FragCoord.xy);
}

`;

const VERT_SRC = `#version 300 es
precision highp float;
layout(location=0) in vec2 a_pos;
out vec2 v_uv;
void main(){
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

function safeCompile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  const ok = gl.getShaderParameter(sh, gl.COMPILE_STATUS);
  const log = gl.getShaderInfoLog(sh) || "";
  return { shader: ok ? sh : null, log };
}
function safeLink(gl: WebGL2RenderingContext, vs: WebGLShader, fs: WebGLShader) {
  const prog = gl.createProgram()!;
  gl.attachShader(prog, vs);
  gl.attachShader(prog, fs);
  gl.linkProgram(prog);
  const ok = gl.getProgramParameter(prog, gl.LINK_STATUS);
  const log = gl.getProgramInfoLog(prog) || "";
  return { program: ok ? prog : null, log };
}
function drawError(gl: WebGL2RenderingContext, msg: string) {
  console.error(msg);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.clearColor(0.2, 0.0, 0.0, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
}

function ShaderCanvas({
  fragSource,
  pixelRatio,
}: {
  fragSource: string;
  pixelRatio?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, l: 0, r: 0 });

  useEffect(() => {
    const canvas = canvasRef.current!;
    const gl = canvas.getContext("webgl2", { premultipliedAlpha: false });
    if (!gl) return;

    let disposed = false;


    const vao = gl.createVertexArray()!;
    gl.bindVertexArray(vao);
    const vbo = gl.createBuffer()!;
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);


    const { shader: vs, log: vsLog } = safeCompile(gl, gl.VERTEX_SHADER, VERT_SRC);
    if (!vs) { drawError(gl, `Vertex compile error:
${vsLog}`); return cleanup; }
    const { shader: fs, log: fsLog } = safeCompile(gl, gl.FRAGMENT_SHADER, fragSource);
    if (!fs) { drawError(gl, `Fragment compile error:
${fsLog}`); gl.deleteShader(vs); return cleanup; }
    const { program, log: linkLog } = safeLink(gl, vs, fs);
    gl.deleteShader(vs); gl.deleteShader(fs);
    if (!program) { drawError(gl, `Program link error:
${linkLog}`); return cleanup; }


    const uResolution = gl.getUniformLocation(program, "iResolution");
    const uTime = gl.getUniformLocation(program, "iTime");
    const uFrame = gl.getUniformLocation(program, "iFrame");
    const uMouse = gl.getUniformLocation(program, "iMouse");


    const getDpr = () => {
      const sys = (window.devicePixelRatio || 1);
      return Math.max(1, Math.min(2, pixelRatio ?? sys));
    };


    let resizeScheduled = false;
    function applySize() {
      resizeScheduled = false;
      if (disposed) return;
      const dpr = getDpr();

      const cssW = Math.max(1, (canvas.clientWidth | 0));
      const cssH = Math.max(1, (canvas.clientHeight | 0));
      const w = Math.max(1, Math.floor(cssW * dpr));
      const h = Math.max(1, Math.floor(cssH * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }
    function scheduleSize() {
      if (resizeScheduled) return;
      resizeScheduled = true;
      requestAnimationFrame(applySize);
    }
    const ro = new ResizeObserver(scheduleSize);
    ro.observe(canvas);
    scheduleSize();


    function onMove(e: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseRef.current.x = Math.max(0, Math.min(x, rect.width));
      mouseRef.current.y = Math.max(0, Math.min(rect.height - y, rect.height));
    }
    function onDown(e: MouseEvent) { if (e.button === 0) mouseRef.current.l = 1; if (e.button === 2) mouseRef.current.r = 1; }
    function onUp(e: MouseEvent)   { if (e.button === 0) mouseRef.current.l = 0; if (e.button === 2) mouseRef.current.r = 0; }
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mousedown", onDown);
    canvas.addEventListener("mouseup", onUp);
    canvas.addEventListener("contextmenu", (e) => e.preventDefault());


    function onContextLost(ev: Event) { ev.preventDefault(); if (rafRef.current) cancelAnimationFrame(rafRef.current); rafRef.current = null; }
    function onContextRestored() { scheduleSize(); startRef.current = performance.now(); frameRef.current = 0; if (!rafRef.current) rafRef.current = requestAnimationFrame(tick); }
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);


    startRef.current = performance.now();
    frameRef.current = 0;

    function tick(now: number) {
      if (disposed) return;
      if (gl.isContextLost()) { rafRef.current = requestAnimationFrame(tick); return; }

      const t = (now - startRef.current) / 1000;
      frameRef.current += 1;

      try {
        gl.useProgram(program);
        if (resizeScheduled) applySize();
        const dpr = getDpr();
        const w = canvas.width, h = canvas.height;

        uResolution && gl.uniform3f(uResolution, w, h, dpr);
        uTime && gl.uniform1f(uTime, t);
        uFrame && gl.uniform1i(uFrame, frameRef.current);
        if (uMouse) {
          const m = mouseRef.current;
          gl.uniform4f(uMouse, m.x * dpr, m.y * dpr, m.l, m.r);
        }

        gl.bindVertexArray(vao);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
      } catch (err) {
        drawError(gl, (err as Error)?.message ?? String(err));
      }

      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);

    function cleanup() {
      disposed = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mousedown", onDown);
      canvas.removeEventListener("mouseup", onUp);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      ro.disconnect();
      try { gl.deleteBuffer(vbo); } catch {}
      try { gl.deleteVertexArray(vao); } catch {}
    }

    return cleanup;
  }, [fragSource, pixelRatio]);

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}


export default function Component() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        background: "black",
        overflow: "hidden",
      }}
    >
      <ShaderCanvas fragSource={SHADER_SRC} />
    </div>
  );
}
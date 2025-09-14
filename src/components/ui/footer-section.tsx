'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, Phone, Twitter } from 'lucide-react';
import { GlowingShadow } from './glowing-shadow';

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'Product',
    links: [
      { title: 'Features', href: '#features' },
      { title: 'Pricing', href: '#pricing' },
      { title: 'Testimonials', href: '#testimonials' },
      { title: 'Integration', href: '/' },
    ],
  },
  {
    label: 'Company',
    links: [
      { title: 'FAQs', href: '/faqs' },
      { title: 'About Us', href: '/about' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Services', href: '/terms' },
    ],
  },
  {
    label: 'Resources',
    links: [
      { title: 'Blog', href: '/blog' },
      { title: 'Changelog', href: '/changelog' },
      { title: 'Brand', href: '/brand' },
      { title: 'Help', href: '/help' },
    ],
  },
  {
    label: 'Connect With Us',
    links: [
      { title: 'Twitter', href: 'https://twitter.com/CRE42938178', icon: Twitter },
      { title: 'Facebook', href: 'https://www.facebook.com/CREO-108606914133622/', icon: FacebookIcon },
      { title: 'Instagram', href: 'https://www.instagram.com/creo.designers/', icon: InstagramIcon },
      { title: 'WhatsApp', href: 'https://wa.me/+919705075741', icon: Phone },
    ],
  },
];

export function Footer() {
  return (
    <div className="w-full bg-black relative z-10">
      <div className="absolute inset-0 bg-black -z-10"></div>
      <footer id="contact" className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-4xl px-6 py-12 lg:py-16">
      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <FrameIcon className="size-8" />
          <div className="text-white text-sm space-y-2">
            <p>Contact Ar. Pavankumar.K</p>
            <p>CREO DESIGNERS</p>
            <p>#37, 21st main, JP Nagar, 2nd phase,</p>
            <p>Marenahalli, Bangalore - 560078</p>
            <div className="mt-2 space-y-1">
              <a href="tel:+919705075741" className="hover:text-white transition-colors flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+91 97050 75741</span>
              </a>
              <a href="mailto:pavankumar.k@creodesigners.com" className="hover:text-white transition-colors">
                pavankumar.k@creodesigners.com
              </a>
            </div>
            <p className="mt-4">© {new Date().getFullYear()} CREO. All rights reserved.</p>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs">{section.label}</h3>
                <ul className="text-white/80 hover:text-white mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-foreground inline-flex items-center transition-all duration-300"
                      >
                        {link.icon && <link.icon className="me-1 size-4" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
      
      </footer>
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

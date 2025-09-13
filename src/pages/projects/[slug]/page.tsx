import { projects, Project } from "@/data/projects";
import Image from "next/image";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return {};
  
  return {
    title: `${project.title} | Creo Designers`,
    description: project.description,
    openGraph: {
      images: [project.images[0]?.url || '']
    }
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  
  if (!project) {
    notFound();
  }

  const mainImage = project.images.find(img => img.isMain) || project.images[0];
  const otherImages = project.images.filter(img => !img.isMain);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-white/80 mb-6 max-w-3xl">{project.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-sm font-medium text-white/60">Location</h3>
              <p className="text-lg">{project.address}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white/60">Year</h3>
              <p className="text-lg">{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-white/60">Area</h3>
              <p className="text-lg">{project.area}</p>
            </div>
          </div>
        </div>

        {/* Main Image */}
        {mainImage && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <Image
              src={mainImage.url}
              alt={mainImage.alt}
              width={1920}
              height={1080}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              {/* Add more detailed project description here */}
              <p className="text-lg leading-relaxed">
                This project showcases our approach to modern residential design, blending contemporary 
                aesthetics with functional living spaces. Every element was carefully considered to create 
                a harmonious living environment that reflects the client's lifestyle and preferences.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {project.services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery */}
        {otherImages.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherImages.map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

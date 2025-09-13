import { GlowingShadow } from "./ui/glowing-shadow";
import { useState, useEffect } from 'react';
import { ProjectModal } from './ProjectModal';
import { projects } from '../pages/Index';

interface ProjectImage {
  url: string;
  alt: string;
  isMain?: boolean;
}

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  images: ProjectImage[];
  services: string[];
  slug: string;
  year: string;
  address: string;
}

export function ProjectCard({ 
  id, 
  title, 
  description, 
  images = [], 
  services = [], 
  slug, 
  year, 
  address 
}: ProjectCardProps) {
  const [mainImage, setMainImage] = useState<ProjectImage | null>(null);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set the main image when component mounts or images change
    if (images && images.length > 0) {
      const main = images.find(img => img.isMain) || images[0];
      setMainImage(main);
    }
  }, [images]);

  // Handle case when there are no images
  if (!mainImage || imageError) {
    return (
      <div className="h-full rounded-3xl overflow-hidden bg-gray-800 p-6">
        <div className="h-full flex items-center justify-center">
          <p className="text-white/60">No image available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="block group h-full cursor-pointer"
      >
      <GlowingShadow className="h-full flex flex-col rounded-3xl overflow-hidden hover:-translate-y-1 transition-transform duration-300 bg-gray-900">
        {/* Image Container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={mainImage.url}
            alt={mainImage.alt || title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
          
          {/* Services on Hover */}
          {services.length > 0 && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 3).map((service, index) => (
                  <span 
                    key={`${id}-service-${index}`} 
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full whitespace-nowrap"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Content Container - Title and Address */}
        <div className="p-4 pt-3 flex flex-col h-auto min-h-[80px]">
          <h3 className="text-base font-semibold text-white leading-tight min-h-[2.5em] line-clamp-2">
            {title}
          </h3>
          {address && (
            <p className="text-white/60 text-xs mt-1.5">
              <span className="inline-flex items-center">
                <svg className="w-2.5 h-2.5 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="truncate">{address}</span>
              </span>
            </p>
          )}
        </div>
      </GlowingShadow>
      </div>

      {isModalOpen && (
        <ProjectModal
          project={{
            id,
            title,
            description,
            services,
            year,
            address,
            images
          }}
          projects={projects}
          onClose={() => setIsModalOpen(false)}
          onProjectChange={(projectId: string) => {
            const newProject = projects.find(p => p.id === projectId);
            if (newProject) {
              setMainImage(newProject.images[0]);
              setImageError(false);
            }
          }}
        />
      )}
    </>
  );
}

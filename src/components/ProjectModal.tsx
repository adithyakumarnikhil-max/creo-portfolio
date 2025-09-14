import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { useEffect, useState, useCallback, useRef } from 'react';

interface ProjectImage {
  url: string;
  alt: string;
}

interface ProjectModalProps {
  project: {
    id: string;
    title: string;
    description: string;
    services: string[];
    year: string;
    address: string;
    images: ProjectImage[];
  };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    services: string[];
    year: string;
    address: string;
    images: ProjectImage[];
  }>;
  onClose: () => void;
  onProjectChange: (projectId: string) => void;
}

export function ProjectModal({ project, projects, onClose, onProjectChange }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const imageContainer = document.getElementById(`image-${project.id}`);
    if (!document.fullscreenElement) {
      imageContainer?.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  }, [project.id]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Trigger animation
    requestAnimationFrame(() => setIsModalOpen(true));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };


  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300"
      style={{ opacity: isModalOpen ? 1 : 0, pointerEvents: isModalOpen ? 'auto' : 'none' }}
      onClick={(e) => {
        // Close modal if clicking on the backdrop
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-6xl max-h-[90vh] mx-4 bg-gray-900 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-10 flex gap-2">
              <button
                onClick={toggleFullscreen}
                className="p-2 bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors"
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5" />
                ) : (
                  <Maximize2 className="w-5 h-5" />
                )}
              </button>
          <button
            onClick={onClose}
            className="p-2 bg-black/50 text-white hover:bg-black/70 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        

        {/* Left Side - Image Carousel */}
        <div className="w-full lg:w-1/2 h-96 lg:h-auto relative bg-black">
          {/* Main Image */}
          <div 
            id={`image-${project.id}`}
            className="relative w-full h-full flex items-center justify-center"
            onClick={toggleFullscreen}
          >
            <img
              src={project.images[currentImageIndex]?.url}
              alt={project.images[currentImageIndex]?.alt || project.title}
              className={`w-full h-full object-contain cursor-zoom-in ${isFullscreen ? 'max-w-screen max-h-screen' : ''}`}
            />

            {/* Image Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-20"
                  aria-label="Next image"
                  style={{
                    backdropFilter: 'blur(4px)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>

        {/* Right Side - Project Details */}
        <div className="w-full lg:w-1/2 h-96 lg:h-auto overflow-y-auto p-6 lg:p-8 bg-gray-900 text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">{project.title}</h2>
            
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <span>{project.year}</span>
              <span>•</span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {project.address}
              </span>
            </div>

            <div className="prose prose-invert max-w-none mb-8">
              <p className="text-gray-300 leading-relaxed">{project.description}</p>
            </div>

            {project.services.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((service, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/10 text-sm rounded-full whitespace-nowrap"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Thumbnail Navigation */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all duration-200 ${currentImageIndex === index ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt || `Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

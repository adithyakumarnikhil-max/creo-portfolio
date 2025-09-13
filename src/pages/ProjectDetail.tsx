import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects, Project } from '@/data/projects';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const foundProject = projects.find(p => p.slug === slug);
    setProject(foundProject || null);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-white/80">Loading project...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <p className="text-xl text-white/80 mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const mainImage = project.images.find(img => img.isMain) || project.images[0];
  const otherImages = project.images.filter(img => !img.isMain);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
          
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
              <h3 className="text-sm font-medium text-white/60">Services</h3>
              <p className="text-lg">{project.services.join(', ')}</p>
            </div>
          </div>
        </div>

        {/* Main Image */}
        {mainImage && (
          <div className="mb-12 rounded-2xl overflow-hidden">
            <img
              src={mainImage.url}
              alt={mainImage.alt || project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Project Details</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="text-sm font-medium text-white/60">Client</h4>
                <p>{project.title}</p>
              </li>
              <li>
                <h4 className="text-sm font-medium text-white/60">Location</h4>
                <p>{project.address}</p>
              </li>
              <li>
                <h4 className="text-sm font-medium text-white/60">Year</h4>
                <p>{project.year}</p>
              </li>
              <li>
                <h4 className="text-sm font-medium text-white/60">Services</h4>
                <ul className="mt-1">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </li>
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
                  <img
                    src={image.url}
                    alt={image.alt || `${project.title} - Image ${index + 1}`}
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
};

export default ProjectDetail;

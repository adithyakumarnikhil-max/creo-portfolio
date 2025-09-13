import { DottedSurface } from "@/components/ui/dotted-surface";
import { GlowingShadow } from "@/components/ui/glowing-shadow";
import Navigation from "@/components/Navigation";
import { Building2, Home, LayoutGrid, Trees, Hammer, MessageCircle, ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactSection } from "@/components/ContactSection";
import { Link } from "react-router-dom";

// Project data
export const projects = [
  {
    id: 'purva-palm-beach',
    title: "PURVA PALM BEACH - Mr. Ethen Parker Residence",
    description: "Luxurious residence featuring contemporary design with elegant interiors and premium finishes, located in the prestigious Palm Beach community.",
    images: [
      { 
        url: "/images/projects/purva-palm-beach/Screenshot 2025-09-13 160457.png", 
        alt: "PURVA PALM BEACH - Elegant Living Area", 
        isMain: true 
      },
      { 
        url: "/images/projects/purva-palm-beach/Screenshot 2025-09-13 160622.png", 
        alt: "PURVA PALM BEACH - Modern Kitchen Design" 
      },
      { 
        url: "/images/projects/purva-palm-beach/Screenshot 2025-09-13 160650.png", 
        alt: "PURVA PALM BEACH - Spacious Living Room" 
      },
      { 
        url: "/images/projects/purva-palm-beach/Screenshot 2025-09-13 160719.png", 
        alt: "PURVA PALM BEACH - Dining Area" 
      },
      { 
        url: "/images/projects/purva-palm-beach/Screenshot 2025-09-13 160800.png", 
        alt: "PURVA PALM BEACH - Bedroom Design" 
      },
      { 
        url: "/images/projects/purva-palm-beach/Screenshot 2025-09-13 160823.png", 
        alt: "PURVA PALM BEACH - Bathroom Design" 
      }
    ],
    services: ["Interior Design", "Space Planning", "Custom Furniture", "Lighting Design"],
    slug: "purva-palm-beach",
    year: "2024",
    address: "Bangalore, India"
  },
  {
    id: 'bharatiya-city',
    title: "BHARATIYA CITY",
    description: "A modern residential complex featuring contemporary architecture and luxurious amenities, designed for modern urban living.",
    images: [
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163255.png", 
        alt: "BHARATIYA CITY - Modern Facade",
        isMain: true
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163313.png", 
        alt: "BHARATIYA CITY - Lobby Area"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163335.png", 
        alt: "BHARATIYA CITY - Living Space"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163347.png", 
        alt: "BHARATIYA CITY - Kitchen Design"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163402.png", 
        alt: "BHARATIYA CITY - Bedroom"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163421.png", 
        alt: "BHARATIYA CITY - Bathroom"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163436.png", 
        alt: "BHARATIYA CITY - Terrace View"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163454.png", 
        alt: "BHARATIYA CITY - Dining Area"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163509.png", 
        alt: "BHARATIYA CITY - Living Room"
      },
      { 
        url: "/images/projects/BHARATIYA CITY/Screenshot 2025-09-13 163523.png", 
        alt: "BHARATIYA CITY - Balcony View"
      }
    ],
    services: ["Architectural Design", "Interior Design", "Landscaping", "Project Management"],
    slug: "bharatiya-city",
    year: "2024",
    address: "Bangalore, India"
  },
  {
    id: 'pashmina-waterfront',
    title: "PASHMINA WATERFRONT",
    description: "Luxury waterfront residences offering breathtaking views and sophisticated living spaces, where modern design meets natural beauty. This project features premium finishes, expansive glass facades, and seamless indoor-outdoor living spaces.",
    images: [
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0057.jpg", 
        alt: "PASHMINA WATERFRONT - Stunning Waterfront Facade",
        isMain: true
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0058.jpg", 
        alt: "PASHMINA WATERFRONT - Elegant Living Room with Panoramic Views"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0059.jpg", 
        alt: "PASHMINA WATERFRONT - Modern Kitchen with Premium Finishes"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0060.jpg", 
        alt: "PASHMINA WATERFRONT - Luxurious Master Bedroom Suite"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0061.jpg", 
        alt: "PASHMINA WATERFRONT - Spa-like Bathroom with Natural Stone"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0062.jpg", 
        alt: "PASHMINA WATERFRONT - Dining Area with Water Views"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0063.jpg", 
        alt: "PASHMINA WATERFRONT - Private Balcony with Seating"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0064.jpg", 
        alt: "PASHMINA WATERFRONT - Modern Staircase Design"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0065.jpg", 
        alt: "PASHMINA WATERFRONT - Home Office with Natural Light"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0066.jpg", 
        alt: "PASHMINA WATERFRONT - Walk-in Closet"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0067.jpg", 
        alt: "PASHMINA WATERFRONT - Guest Bedroom"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0068.jpg", 
        alt: "PASHMINA WATERFRONT - Outdoor Entertaining Area"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0069.jpg", 
        alt: "PASHMINA WATERFRONT - Rooftop Terrace with City Views"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0070.jpg", 
        alt: "PASHMINA WATERFRONT - Sunset View from Balcony"
      },
      { 
        url: "/images/projects/PASHMINA WATERFRONT/IMG-20250913-WA0071.jpg", 
        alt: "PASHMINA WATERFRONT - Aerial View of Waterfront Location"
      }
    ],
    services: [
      "Luxury Interior Design", 
      "Architectural Detailing", 
      "Custom Millwork", 
      "Lighting Design",
      "Space Planning",
      "Material Selection"
    ],
    slug: "pashmina-waterfront",
    year: "2024",
    address: "Bangalore, India"
  },
  {
    id: 'krishna-kishore',
    title: "Mr. Krishna Kishore Residence",
    description: "Elegant and sophisticated residence designed for modern living, featuring clean lines, premium materials, and thoughtful spatial planning that creates a harmonious living environment.",
    images: [
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0008.jpg",
        alt: "Mr. Krishna Kishore Residence - Elegant Living Room",
        isMain: true
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0010.jpg",
        alt: "Mr. Krishna Kishore Residence - Modern Kitchen Design"
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0016.jpg",
        alt: "Mr. Krishna Kishore Residence - Dining Area"
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0018.jpg",
        alt: "Mr. Krishna Kishore Residence - Master Bedroom"
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0023.jpg",
        alt: "Mr. Krishna Kishore Residence - Bathroom Design"
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0027.jpg",
        alt: "Mr. Krishna Kishore Residence - Living Space"
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0032.jpg",
        alt: "Mr. Krishna Kishore Residence - Study Area"
      },
      { 
        url: "/images/projects/Mr. Krishna Kishore/IMG-20250913-WA0041.jpg",
        alt: "Mr. Krishna Kishore Residence - Balcony View"
      }
    ],
    services: ["Residential Interior Design", "Space Planning", "Custom Furniture", "Lighting Design"],
    slug: "krishna-kishore-residence",
    year: "2023",
    address: "Bangalore, India"
  },
  {
    id: 'manjunath-residence',
    title: "Mr. Manjunath Residence",
    description: "Contemporary home design that blends modern aesthetics with functional living spaces, featuring innovative storage solutions and a warm, inviting atmosphere.",
    images: [
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0029.jpg",
        alt: "Mr. Manjunath Residence - Modern Living Room",
        isMain: true
      },
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0035.jpg",
        alt: "Mr. Manjunath Residence - Kitchen and Dining Area"
      },
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0045.jpg",
        alt: "Mr. Manjunath Residence - Bedroom Design"
      },
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0046.jpg",
        alt: "Mr. Manjunath Residence - Bathroom"
      },
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0049.jpg",
        alt: "Mr. Manjunath Residence - Living Space Detail"
      },
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0050.jpg",
        alt: "Mr. Manjunath Residence - Dining Area"
      },
      { 
        url: "/images/projects/Mr. Manjunath Project/IMG-20250913-WA0055.jpg",
        alt: "Mr. Manjunath Residence - Living Room View"
      }
    ],
    services: ["Complete Home Interior", "Custom Carpentry", "Lighting Solutions", "Material Selection"],
    slug: "manjunath-residence",
    year: "2023",
    address: "Bangalore, India"
  }
];

const Index = () => {
  return (
    <div className="relative w-screen overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="relative w-screen h-screen overflow-hidden">
        {/* Dotted Surface Background */}
        <DottedSurface />
        
        {/* Brand Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-center break-words w-full"
            style={{
              background: 'var(--brand-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'var(--brand-shadow)',
              filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))',
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              lineHeight: '1.2',
              padding: '0 1rem'
            }}
          >
            CREO DESIGNERS
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen py-20" style={{ backgroundColor: '#000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">About Us</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We are a multidisciplinary creative design studio established in 2019
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 px-4">
            <GlowingShadow className="rounded-3xl">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/80">To be the best customer centric company, where customers can find and discover their dream home with our creativity.</p>
              </div>
            </GlowingShadow>
            
            <GlowingShadow className="rounded-3xl">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80">To make people live in their dream home with their comfort & happiness.</p>
              </div>
            </GlowingShadow>
            
            <GlowingShadow className="rounded-3xl">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">Our Plan</h3>
                <p className="text-white/80">Customer should feel everything is possible with CREO, we are a set team with the goals to make your surroundings beautiful.</p>
              </div>
            </GlowingShadow>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative min-h-screen py-20" style={{ backgroundColor: '#000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Services</h2>
            <p className="text-xl text-white/80">Below are the services which we provide at CREO</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
            {[
              { 
                title: 'Architecture', 
                description: 'Innovative architectural designs that blend form and function to create stunning spaces.',
                icon: <Building2 className="w-10 h-10 mb-4 text-white" />
              },
              { 
                title: 'Interiors', 
                description: 'Transform your space with our bespoke interior design solutions.',
                icon: <Home className="w-10 h-10 mb-4 text-white" />
              },
              { 
                title: 'Layout Planning', 
                description: 'Optimize your space with our expert space planning and layout design.',
                icon: <LayoutGrid className="w-10 h-10 mb-4 text-white" />
              },
              { 
                title: 'Landscaping', 
                description: 'Create beautiful outdoor spaces that complement your property.',
                icon: <Trees className="w-10 h-10 mb-4 text-white" />
              },
              { 
                title: 'Construction', 
                description: 'End-to-end construction services with attention to detail and quality.',
                icon: <Hammer className="w-10 h-10 mb-4 text-white" />
              },
              { 
                title: 'Consultation', 
                description: 'Expert advice and guidance for all your design and construction needs.',
                icon: <MessageCircle className="w-10 h-10 mb-4 text-white" />
              }
            ].map((service, index) => (
              <GlowingShadow key={index} className="rounded-3xl h-full">
                <div className="p-6 md:p-8 h-full flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-white/10 rounded-2xl">
                    {service.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">{service.description}</p>
                </div>
              </GlowingShadow>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-20" style={{ backgroundColor: '#000' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Our Projects</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Explore our carefully crafted designs and see how we transform spaces into masterpieces</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                images={project.images}
                services={project.services}
                slug={project.slug}
                year={project.year}
                address={project.address}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Index;
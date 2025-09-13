import { DottedSurface } from "@/components/ui/dotted-surface";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Eye, Lightbulb, Home, Palette, MapPin, Trees, Building } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Architecture",
      description: "Complete architectural design and planning services for residential and commercial projects."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Interiors",
      description: "Transform your spaces with our innovative interior design solutions that blend functionality with aesthetics."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Layout Planning", 
      description: "Strategic space planning to maximize functionality and flow in your living or working environment."
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Landscaping",
      description: "Create beautiful outdoor spaces that complement your architecture and enhance your lifestyle."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Construction",
      description: "Full construction services to bring your dream designs to life with quality craftsmanship."
    }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Our Mission",
      description: "Our goal when we created CREO was to be the best customer centric company, where customers can find and discover their dream home with our creativity."
    },
    {
      icon: <Eye className="w-12 h-12" />,
      title: "Our Vision",
      description: "To make people live in their dream home with their comfort & happiness, creating spaces that inspire and nurture."
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Our Plan",
      description: "Customer should feel everything is possible with CREO. We are a set team with the goals to make your surroundings beautiful."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Dotted Surface Background */}
      <DottedSurface />
      
      {/* Content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-6 text-white border-white/20 bg-white/10 backdrop-blur-sm">
              About CREO Designers
            </Badge>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-sans"
              style={{
                background: 'var(--brand-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: 'var(--brand-shadow)',
                filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
              }}
            >
              Design Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              We are a multidisciplinary creative design studio established in 2019, working together to design, 
              create, and produce work that we are proud of for folks that we believe in.
            </p>
          </div>

          {/* Main Story */}
          <Card className="mb-20 p-8 md:p-12 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:scale-105 transition-transform duration-300">
                One Stop Solution For Complete Home
              </h2>
              <p className="text-lg text-white/90 leading-relaxed mb-8">
                CREO is a multidisciplinary creative design studio that believes in the power of thoughtful design. 
                We work collaboratively with our clients to create spaces that not only look beautiful but also 
                function seamlessly with their lifestyle. Our approach combines innovation with practicality, 
                ensuring every project reflects our client's unique vision while maintaining the highest standards 
                of design excellence.
              </p>
              <div className="flex items-center justify-center text-white/60 group-hover:text-white/80 transition-colors duration-300">
                <span className="text-sm uppercase tracking-wider">Established 2019</span>
                <ArrowRight className="w-4 h-4 mx-3" />
                <span className="text-sm uppercase tracking-wider">Complete Design Solutions</span>
              </div>
            </div>
          </Card>

          {/* Values Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Foundation</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Built on strong values and a clear vision for the future
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-6 p-4 rounded-full bg-white/10 text-white group-hover:bg-white/20 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/90 transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Comprehensive design solutions tailored to bring your vision to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105 cursor-pointer"
                >
                  <div className="flex flex-col items-start">
                    <div className="mb-4 p-3 rounded-lg bg-white/10 text-white group-hover:bg-white/20 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="p-8 md:p-12 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border-white/20 text-center hover:from-white/15 hover:to-white/10 transition-all duration-300 group">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:scale-105 transition-transform duration-300">
              Ready to Create Your Dream Space?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's work together to transform your vision into reality. Contact us today to start your design journey.
            </p>
            <button 
              className="inline-flex items-center px-8 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold rounded-full transition-all duration-300 group-hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default About;
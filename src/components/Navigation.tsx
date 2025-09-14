import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-4 left-4 right-4 z-50">
      <div 
        className="max-w-6xl mx-auto rounded-full backdrop-blur-md border border-white/20 shadow-lg overflow-hidden"
        style={{
          background: 'var(--nav-backdrop)',
          boxShadow: 'var(--nav-floating-shadow)',
          position: 'relative'
        }}
      >
        {/* Holographic overlay */}
        <div 
          className="absolute inset-0 opacity-60 animate-pulse"
          style={{
            background: 'var(--holographic-gradient)',
            backgroundSize: '400% 400%',
            animation: 'holographic 8s ease-in-out infinite'
          }}
        />
        
        <div className="relative px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl tracking-wide">CREO</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-full relative overflow-hidden group"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white/80 hover:text-white inline-flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all duration-200"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden mt-2">
          <div 
            className="mx-4 rounded-2xl backdrop-blur-md border border-white/20 overflow-hidden"
            style={{
              background: 'var(--nav-backdrop)',
              boxShadow: 'var(--nav-floating-shadow)'
            }}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white block px-4 py-2 text-base font-medium transition-all duration-200 hover:bg-white/10 rounded-full"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
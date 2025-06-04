import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';
import Button from '../components/ui/Button';
import LaceRibbonBackground from '../components/LaceRibbonBackground';

const Home: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Create sparkle effect elements
  const renderSparkles = () => {
    const sparkles = [];
    for (let i = 0; i < 20; i++) {
      const delay = Math.random() * 5;
      const left = Math.random() * 100;
      const top = Math.random() * 100;

      sparkles.push(
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            animationDelay: `${delay}s`,
          }}
        />
      );
    }
    return sparkles;
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Background decoration */}
      <LaceRibbonBackground />
      <div className="absolute inset-0 bg-gradient-aurora opacity-60 z-0"></div>

      {/* Sparkle effects */}
      {renderSparkles()}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="mb-6 inline-block">
              <img
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white shadow-md"
              />
            </div>

            <h1 className={`text-4xl md:text-6xl font-playfair font-semibold mb-4 text-primary-700 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}>
              <span className="relative">
                Yuki Tanaka
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-300 opacity-50"></span>
              </span>
            </h1>

            <p className={`text-xl md:text-2xl font-mincho text-gray-700 mb-8 transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}>
              <span className="font-caveat text-primary-500">Engineer</span> & <span className="font-caveat text-primary-500">Designer</span>
            </p>

            <p className={`text-lg text-gray-600 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}>
              Creating beautiful, functional, and user-friendly digital experiences with passion and precision
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-900 ${loaded ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
              }`}>
              <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="primary" size="lg">
                  Discover My Work
                </Button>
              </Link>
              <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-500" />
      </div>
    </section>
  );
};

export default Home;
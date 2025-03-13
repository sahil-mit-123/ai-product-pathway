
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      const cards = containerRef.current.querySelectorAll('.parallax-card');
      cards.forEach((card: Element) => {
        if (card instanceof HTMLElement) {
          const speed = parseFloat(card.dataset.speed || '0');
          const offsetX = (x - 0.5) * speed;
          const offsetY = (y - 0.5) * speed;
          
          card.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-blue-400/10 filter blur-3xl"></div>
      </div>
      
      {/* Floating Cards */}
      <GlassCard 
        className="absolute top-1/4 right-[15%] w-48 h-32 p-4 rotate-6 parallax-card animate-float"
        data-speed="15"
        intensity="light"
      >
        <div className="h-3 w-3/4 bg-primary/20 rounded-full mb-2"></div>
        <div className="h-2 w-1/2 bg-primary/20 rounded-full mb-2"></div>
        <div className="h-2 w-2/3 bg-primary/20 rounded-full"></div>
      </GlassCard>
      
      <GlassCard 
        className="absolute bottom-1/4 left-[20%] w-40 h-40 p-4 -rotate-12 parallax-card animate-float"
        data-speed="10"
        intensity="light"
      >
        <div className="h-full w-full rounded-lg bg-primary/10 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-primary/20"></div>
        </div>
      </GlassCard>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-in">
          AI-Powered Startup Platform
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance animate-fade-in [animation-delay:200ms]">
          Learn the business language of <span className="text-primary">digital products</span> and become an AI startup practitioner
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
          Master the essential skills and frameworks needed to build, launch, and scale successful digital products in the era of artificial intelligence.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in [animation-delay:600ms]">
          <Button 
            variant="primary" 
            size="lg" 
            rounded 
            icon={<ArrowRight size={16} />} 
            iconPosition="right"
          >
            Get Started Now
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            rounded
          >
            Explore Our Courses
          </Button>
        </div>
        
        <div className="mt-16 animate-fade-in [animation-delay:800ms]">
          <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
                <div className="h-8 w-20 bg-gray-300/30 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-muted flex items-start justify-center p-1">
          <div className="h-2 w-2 rounded-full bg-muted"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

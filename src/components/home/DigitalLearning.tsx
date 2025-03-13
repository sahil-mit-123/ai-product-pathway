
import React, { useRef, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { Check, ChevronRight } from 'lucide-react';

interface LearningStep {
  id: number;
  title: string;
  description: string;
}

const DigitalLearning: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Animation for elements when they come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);
  
  const learningPoints = [
    "Product-market fit",
    "Digital transformation essentials",
    "Key technology frameworks",
    "UX/UI fundamentals",
    "Monetization strategies",
    "MVP development",
  ];
  
  const learningSteps: LearningStep[] = [
    {
      id: 1,
      title: "Introduction to digital ecosystems",
      description: "Learn the foundational concepts of digital product ecosystems and how they function in today's marketplace."
    },
    {
      id: 2,
      title: "UX/UI basics",
      description: "Master the core principles of user experience and interface design that drive successful digital products."
    },
    {
      id: 3,
      title: "Product lifecycle fundamentals",
      description: "Understand the complete lifecycle of digital products from ideation to scaling and optimization."
    },
    {
      id: 4,
      title: "Monetization models",
      description: "Explore various revenue models and learn how to implement the right monetization strategy for your product."
    },
  ];
  
  return (
    <section 
      id="learning" 
      ref={sectionRef} 
      className="py-24 px-6 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-on-scroll opacity-0">
            Digital Learning
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 [animation-delay:200ms]">
            Master the Language of Digital Products
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 [animation-delay:400ms]">
            Gain the knowledge and skills needed to communicate effectively in the digital product space and transform your ideas into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          {/* Learning Points */}
          <div className="animate-on-scroll opacity-0 [animation-delay:600ms]">
            <h3 className="text-2xl font-semibold mb-6">You will learn:</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {learningPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={14} />
                  </div>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Animated Graphic */}
          <div className="relative h-64 md:h-80 animate-on-scroll opacity-0 [animation-delay:800ms]">
            <GlassCard className="absolute inset-0 p-6 overflow-hidden">
              <div className="relative h-full w-full rounded-lg bg-blue-50 flex items-center justify-center">
                {/* Simulated Product Design UI */}
                <div className="absolute top-4 left-4 h-3 w-3 rounded-full bg-red-400"></div>
                <div className="absolute top-4 left-10 h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="absolute top-4 left-16 h-3 w-3 rounded-full bg-green-400"></div>
                
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/40 animate-pulse-slow"></div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 h-8 bg-white/60 rounded-md"></div>
              </div>
            </GlassCard>
            
            <GlassCard 
              className="absolute top-6 -right-4 w-32 h-24 rotate-6 animate-float p-3"
              blur="sm"
              intensity="light"
            >
              <div className="h-2 w-3/4 bg-primary/20 rounded-full mb-2"></div>
              <div className="h-2 w-1/2 bg-primary/20 rounded-full mb-2"></div>
              <div className="h-2 w-3/5 bg-primary/20 rounded-full"></div>
            </GlassCard>
            
            <GlassCard 
              className="absolute -bottom-4 -left-4 w-40 h-20 -rotate-3 animate-float [animation-delay:1s] p-3"
              blur="sm"
              intensity="light"
            >
              <div className="flex justify-between mb-2">
                <div className="h-3 w-3 rounded-full bg-primary/30"></div>
                <div className="h-3 w-10 rounded-full bg-primary/20"></div>
              </div>
              <div className="h-8 w-full rounded-md bg-blue-100/50"></div>
            </GlassCard>
          </div>
        </div>
        
        {/* Interactive Roadmap */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center animate-on-scroll opacity-0">
            Interactive Roadmap
          </h3>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Steps Timeline */}
            {learningSteps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative flex mb-12 last:mb-0 animate-on-scroll opacity-0`}
                style={{ animationDelay: `${800 + index * 200}ms` }}
              >
                {/* Step Indicator and Connector */}
                <div className="flex-shrink-0 mr-6">
                  <div className="step-indicator">{step.id}</div>
                  {index < learningSteps.length - 1 && <div className="step-connector"></div>}
                </div>
                
                {/* Step Content */}
                <GlassCard className="flex-grow p-6 hover-lift">
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center animate-on-scroll opacity-0 [animation-delay:1200ms]">
          <h3 className="text-xl font-medium mb-4">
            Join a cohort and start learning today!
          </h3>
          
          <Button 
            variant="primary" 
            size="lg" 
            rounded
            icon={<ChevronRight size={16} />}
            iconPosition="right"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DigitalLearning;

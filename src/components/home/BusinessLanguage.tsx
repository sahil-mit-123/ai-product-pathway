
import React, { useRef, useEffect } from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { ChevronRight, BarChart, Zap, Target, TrendingUp } from 'lucide-react';

interface BusinessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BusinessLanguage: React.FC = () => {
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
  
  const businessSteps: BusinessStep[] = [
    {
      id: 1,
      title: "Business models & revenue streams",
      description: "Learn how to identify the right business model for your product and optimize revenue streams.",
      icon: <BarChart className="h-6 w-6 text-primary" />
    },
    {
      id: 2,
      title: "AI in business strategy",
      description: "Discover how to leverage AI to gain competitive advantage and transform business operations.",
      icon: <Zap className="h-6 w-6 text-primary" />
    },
    {
      id: 3,
      title: "Market positioning & competition",
      description: "Learn techniques to position your product effectively against competitors in the market.",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      id: 4,
      title: "Scaling a digital startup",
      description: "Master the strategies and tactics needed to scale your digital product business.",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
  ];
  
  return (
    <section 
      id="business" 
      ref={sectionRef} 
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-on-scroll opacity-0">
            Business Language
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-on-scroll opacity-0 [animation-delay:200ms]">
            Speak the Language of Digital Success
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 [animation-delay:400ms]">
            Develop the business acumen needed to communicate effectively with stakeholders, investors, and team members in the digital product space.
          </p>
        </div>
        
        {/* Animated Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Visual Representation */}
          <div className="relative h-80 animate-on-scroll opacity-0 [animation-delay:600ms] order-2 lg:order-1">
            <GlassCard className="absolute inset-0 p-8 overflow-hidden">
              <div className="relative h-full w-full flex flex-col justify-center">
                <div className="absolute left-0 top-1/4 right-0 h-1 bg-gray-100">
                  <div className="absolute left-0 top-0 bottom-0 w-3/4 bg-primary rounded shimmer"></div>
                </div>
                
                {[0, 1, 2, 3].map((index) => (
                  <div 
                    key={index} 
                    className="absolute flex flex-col items-center"
                    style={{ 
                      left: `${index * 28}%`, 
                      top: index % 2 === 0 ? '5%' : '55%',
                      transform: 'translateX(-50%)'
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full ${index < 3 ? 'bg-primary' : 'bg-gray-200'} mb-2`}>
                      {index < 3 && <Check className="h-3 w-3 text-white" />}
                    </div>
                    <div className={`h-10 w-20 ${index < 3 ? 'bg-primary/10' : 'bg-gray-100'} rounded text-xs flex items-center justify-center`}>
                      Step {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
            
            <GlassCard 
              className="absolute -bottom-8 right-12 w-36 h-24 rotate-3 animate-float p-3"
              blur="sm"
              intensity="light"
            >
              <div className="h-2 w-2/3 bg-primary/20 rounded-full mb-2"></div>
              <div className="h-2 w-1/2 bg-primary/20 rounded-full mb-2"></div>
              <div className="h-8 w-full bg-primary/10 rounded-md"></div>
            </GlassCard>
            
            <GlassCard 
              className="absolute -top-8 -left-4 w-28 h-28 -rotate-6 animate-float [animation-delay:1.5s] p-3"
              blur="sm"
              intensity="light"
            >
              <div className="h-full w-full rounded-full bg-blue-100/50 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-primary/20"></div>
              </div>
            </GlassCard>
          </div>
          
          {/* Steps Description */}
          <div className="animate-on-scroll opacity-0 [animation-delay:800ms] order-1 lg:order-2">
            <h3 className="text-2xl font-semibold mb-6">The Business Language Roadmap:</h3>
            
            <div className="space-y-6">
              {businessSteps.map((step, index) => (
                <div 
                  key={step.id} 
                  className="animate-on-scroll opacity-0"
                  style={{ animationDelay: `${1000 + index * 200}ms` }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center animate-on-scroll opacity-0 [animation-delay:1600ms]">
          <h3 className="text-xl font-medium mb-4">
            Become an AI startup practitioner—turn ideas into real digital products!
          </h3>
          
          <Button 
            variant="primary" 
            size="lg" 
            rounded
            icon={<ChevronRight size={16} />}
            iconPosition="right"
          >
            Join the Startup Revolution
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessLanguage;

// Helper component for the check icon
const Check: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

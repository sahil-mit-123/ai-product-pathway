
import React, { useState } from 'react';
import GlassCard from '../ui/GlassCard';
import Button from '../ui/Button';
import { ArrowRight, Upload, Check, Database, Cpu, Users } from 'lucide-react';

type FormStep = 1 | 2 | 3 | 4 | 5;

interface FormField {
  id: string;
  label: string;
  placeholder: string;
  type: 'text' | 'textarea' | 'file';
}

interface StepConfig {
  title: string;
  description: string;
  fields: FormField[];
  responseTitle: string;
  responseContent: string[];
}

const ApplicationForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleFileChange = (id: string, file: File | null) => {
    if (file) {
      setFormData((prev) => ({ ...prev, [id]: file.name }));
    }
  };
  
  const handleNextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as FormStep);
    } else {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        // Here you would handle the actual form submission
        alert('Application submitted successfully!');
      }, 2000);
    }
  };
  
  const steps: Record<FormStep, StepConfig> = {
    1: {
      title: "Describe Your Business Idea",
      description: "Tell us about your digital product idea, target audience, and key features you envision.",
      fields: [
        {
          id: "productIdea",
          label: "Digital Product Idea",
          placeholder: "Describe your product idea in detail...",
          type: "textarea"
        },
        {
          id: "targetAudience",
          label: "Target Audience",
          placeholder: "Who is your ideal customer?",
          type: "text"
        },
        {
          id: "keyFeatures",
          label: "Key Features",
          placeholder: "List the main features of your product",
          type: "textarea"
        }
      ],
      responseTitle: "Business Validation",
      responseContent: [
        "Your product idea has potential in the current market landscape",
        "The target audience is well-defined and accessible",
        "Consider expanding the feature set to include AI-driven personalization"
      ]
    },
    2: {
      title: "UI/UX Concept",
      description: "Explain your UI/UX vision or upload wireframes if you have them.",
      fields: [
        {
          id: "designVision",
          label: "Design Vision",
          placeholder: "Describe the look and feel you envision for your product...",
          type: "textarea"
        },
        {
          id: "userFlow",
          label: "User Flow",
          placeholder: "How do you expect users to navigate through your product?",
          type: "textarea"
        },
        {
          id: "wireframes",
          label: "Wireframes (Optional)",
          placeholder: "Upload wireframes or mockups",
          type: "file"
        }
      ],
      responseTitle: "UI/UX Assessment",
      responseContent: [
        "Your design approach prioritizes user experience appropriately",
        "Consider implementing a design system for consistency",
        "The user flow could be optimized to reduce friction points"
      ]
    },
    3: {
      title: "Get an Evaluated Price",
      description: "Provide a brief project scope so we can estimate costs.",
      fields: [
        {
          id: "projectScope",
          label: "Project Scope",
          placeholder: "Describe the scope of your project...",
          type: "textarea"
        },
        {
          id: "timeline",
          label: "Expected Timeline",
          placeholder: "When do you aim to launch?",
          type: "text"
        },
        {
          id: "techStack",
          label: "Preferred Technologies",
          placeholder: "Any specific technologies you prefer?",
          type: "text"
        }
      ],
      responseTitle: "Cost Estimation",
      responseContent: [
        "Based on your requirements, estimated development cost: $30,000 - $45,000",
        "Estimated timeline: 3-4 months for MVP",
        "Recommended team: 2 developers, 1 designer, 1 product manager"
      ]
    },
    4: {
      title: "Get an Exact Price",
      description: "Specify exact feature requirements, integrations, and scalability needs.",
      fields: [
        {
          id: "detailedFeatures",
          label: "Detailed Feature Requirements",
          placeholder: "List all features with specific details...",
          type: "textarea"
        },
        {
          id: "integrations",
          label: "Required Integrations",
          placeholder: "What third-party services need to be integrated?",
          type: "text"
        },
        {
          id: "scalability",
          label: "Scalability Requirements",
          placeholder: "Expected user base and growth projections",
          type: "textarea"
        }
      ],
      responseTitle: "Precise Cost Breakdown",
      responseContent: [
        "Development: $32,500",
        "Design: $8,750",
        "Testing & QA: $6,200",
        "Project Management: $7,500",
        "Total: $54,950"
      ]
    },
    5: {
      title: "Involve Developers",
      description: "Let us match you with the perfect development team for your project.",
      fields: [
        {
          id: "devPreferences",
          label: "Development Team Preferences",
          placeholder: "Any specific requirements for your development team?",
          type: "textarea"
        },
        {
          id: "communication",
          label: "Preferred Communication Style",
          placeholder: "How would you like to communicate with your team?",
          type: "text"
        },
        {
          id: "additionalInfo",
          label: "Additional Information",
          placeholder: "Any other details we should know?",
          type: "textarea"
        }
      ],
      responseTitle: "Team Recommendation",
      responseContent: [
        "Based on your requirements, we recommend a team with expertise in AI and mobile app development",
        "We'll match you with developers experienced in your industry",
        "Your project would benefit from an agile development approach with weekly sprints"
      ]
    }
  };
  
  const currentStepConfig = steps[currentStep];
  
  // Calculate the progress percentage
  const progressPercentage = ((currentStep - 1) / 4) * 100;
  
  return (
    <section id="apply" className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Build Your Product
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Apply to Build a Digital Product
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out our AI-powered application form and get real-time insights, pricing estimates, and expert advice tailored to your project.
          </p>
        </div>
        
        <div className="mb-8">
          {/* Progress Bar */}
          <div className="h-2 w-full bg-gray-100 rounded-full mb-4">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          {/* Step Indicator */}
          <div className="flex justify-between mb-8">
            {[1, 2, 3, 4, 5].map((step) => (
              <div 
                key={step} 
                className="flex flex-col items-center"
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step < currentStep ? 'bg-primary text-white' : 
                    step === currentStep ? 'bg-primary/20 text-primary border border-primary' : 
                    'bg-gray-100 text-gray-400'
                  } mb-2 text-sm font-medium transition-all duration-300`}
                >
                  {step < currentStep ? <Check size={14} /> : step}
                </div>
                <span className="text-xs text-muted-foreground hidden sm:block">Step {step}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-3">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                {currentStepConfig.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentStepConfig.description}
              </p>
              
              <form className="space-y-6">
                {currentStepConfig.fields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label className="text-sm font-medium" htmlFor={field.id}>
                      {field.label}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        className="w-full p-3 rounded-lg border border-input bg-background min-h-[100px]"
                        placeholder={field.placeholder}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                      />
                    ) : field.type === 'file' ? (
                      <div className="relative">
                        <label 
                          htmlFor={field.id}
                          className="flex items-center justify-center w-full p-4 border border-dashed border-primary/50 rounded-lg cursor-pointer bg-primary/5 hover:bg-primary/10 transition-colors"
                        >
                          <div className="text-center">
                            <Upload className="mx-auto h-6 w-6 text-muted-foreground mb-2" />
                            <p className="text-sm text-muted-foreground">
                              Drag and drop or click to upload
                            </p>
                          </div>
                          <input
                            type="file"
                            id={field.id}
                            className="hidden"
                            onChange={(e) => handleFileChange(field.id, e.target.files ? e.target.files[0] : null)}
                          />
                        </label>
                      </div>
                    ) : (
                      <input
                        type="text"
                        id={field.id}
                        className="w-full p-3 rounded-lg border border-input bg-background"
                        placeholder={field.placeholder}
                        onChange={(e) => handleInputChange(field.id, e.target.value)}
                      />
                    )}
                  </div>
                ))}
                
                <div className="pt-4">
                  <Button 
                    variant="primary"
                    size="lg"
                    className="w-full"
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    onClick={handleNextStep}
                    loading={isSubmitting}
                  >
                    {currentStep < 5 ? 'Continue to Next Step' : 'Submit Application'}
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>
          
          {/* AI Response Section */}
          <div className="lg:col-span-2">
            <GlassCard className="p-6 bg-primary/5 backdrop-blur-sm border-primary/10">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Cpu size={16} className="text-primary" />
                </div>
                <h4 className="font-medium">AI Analysis</h4>
              </div>
              
              <div className="border-b border-primary/10 pb-4 mb-4">
                <h5 className="font-medium mb-2">{currentStepConfig.responseTitle}</h5>
                <ul className="space-y-2">
                  {currentStepConfig.responseContent.map((item, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <Database size={18} className="text-primary" />
                  <span className="text-sm">Data analyzed from 500+ similar projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={18} className="text-primary" />
                  <span className="text-sm">Insights from 50+ industry experts</span>
                </div>
              </div>
            </GlassCard>
            
            {/* Animated elements below the AI response */}
            <div className="mt-6 relative h-40 hidden lg:block">
              <GlassCard 
                className="absolute top-0 right-0 w-32 h-20 p-3 animate-float"
                blur="sm"
                intensity="light"
              >
                <div className="h-2 w-2/3 bg-primary/20 rounded-full mb-2"></div>
                <div className="h-2 w-1/2 bg-primary/20 rounded-full mb-2"></div>
                <div className="h-8 w-full bg-primary/10 rounded-md"></div>
              </GlassCard>
              
              <GlassCard 
                className="absolute bottom-0 left-4 w-28 h-28 -rotate-6 animate-float [animation-delay:1s] p-3"
                blur="sm"
                intensity="light"
              >
                <div className="h-full w-full rounded-lg bg-blue-100/50 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary/40"></div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-medium mb-4">
            Apply now and start building your AI-powered digital product!
          </h3>
          
          <Button 
            variant="primary" 
            size="lg" 
            rounded
            icon={<ArrowRight size={16} />}
            iconPosition="right"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Apply & Get AI Advice
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;


import React from 'react';
import { cn } from '../../lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  blur?: "sm" | "md" | "lg";
  intensity?: "light" | "medium" | "heavy";
  hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  blur = "md", 
  intensity = "medium",
  hoverEffect = false,
  ...props 
}) => {
  const blurMap = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
  };
  
  const intensityMap = {
    light: "bg-white/40 border-white/20",
    medium: "bg-white/60 border-white/30",
    heavy: "bg-white/80 border-white/40",
  };
  
  return (
    <div
      className={cn(
        'rounded-xl border shadow-sm',
        blurMap[blur],
        intensityMap[intensity],
        hoverEffect && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;

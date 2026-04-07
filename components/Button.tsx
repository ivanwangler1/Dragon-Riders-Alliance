import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "relative overflow-hidden font-serif font-bold uppercase tracking-[0.15em] transition-all duration-300 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const sizeStyles = "px-8 py-3 text-xs md:text-sm";

  const variants = {
    primary: `
      bg-gradient-to-b from-gold-500 to-gold-700 
      text-black 
      border border-gold-400 
      shadow-[0_4px_15px_rgba(234,179,8,0.3)] 
      hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] 
      hover:brightness-110
    `,
    secondary: `
      bg-dark-900 
      text-gold-400 
      border border-gold-700/50 
      hover:border-gold-500 
      hover:bg-dark-800 
      hover:text-gold-300
      hover:shadow-[0_0_15px_rgba(234,179,8,0.2)]
    `,
    outline: `
      bg-transparent 
      text-gray-300 
      border border-white/20 
      hover:border-white/60 
      hover:text-white 
      hover:bg-white/5
    `
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${sizeStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {/* Shine effect overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
      <span className="relative z-10">{children}</span>
    </button>
  );
};
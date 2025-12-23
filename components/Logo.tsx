
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => (
  <svg 
    viewBox="0 0 1024 1024" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <rect width="1024" height="1024" rx="200" fill="#0B0F1A"/>
    <path d="M300 250V774H724" stroke="#3B82F6" strokeWidth="80" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="550" y="680" width="180" height="80" rx="10" fill="#3B82F6">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
    <path d="M420 380V654H580" stroke="white" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
  </svg>
);

export default Logo;

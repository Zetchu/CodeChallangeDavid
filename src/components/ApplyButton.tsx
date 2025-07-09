import React from 'react';

interface ApplyButtonProps {
  onClick?: () => void;
  className?: string;
}

const ApplyButton: React.FC<ApplyButtonProps> = ({
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-20 h-20 bg-green-500 text-white font-bold rounded-full text-xs hover:bg-green-600 transition-all duration-300 shadow-lg overflow-hidden flex items-center justify-center ${className}`}
    >
      <span className='z-10 text-center leading-tight group-hover:scale-105 transition-transform duration-300'>
        APPLY
        <br />
        NOW
      </span>
    </button>
  );
};

export default ApplyButton;

import React from 'react';

const Loading = ({ message = 'Loading...', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`${sizeClasses[size]} border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-4`}></div>
      <p className="text-gray-300 text-center">{message}</p>
    </div>
  );
};

export default Loading;
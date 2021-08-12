import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2 animate-bounce h-screen">
      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
      <div className="w-8 h-8 bg-green-600 rounded-full"></div>
      <div className="w-8 h-8 bg-green-700 rounded-full"></div>
    </div>
  );
};

export default Loading;

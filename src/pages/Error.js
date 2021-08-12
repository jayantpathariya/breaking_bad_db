import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-green-100 text-center">
        <h1 className="text-5xl mb-2">404</h1>
        <h2 className="text-xl mb-4">Page not found</h2>
        <Link
          to="/"
          className="px-4 py-2 bg-green-500 rounded hover:bg-green-600 transition-colors duration-300 shadow"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;

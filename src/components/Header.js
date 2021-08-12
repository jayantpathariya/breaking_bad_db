import React, { useState } from 'react';
import logo from '../assets/Breaking_Bad_logo.svg';

const Header = ({ getSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    getSearchTerm(e.target.value);
  };

  return (
    <header className="bg-green-600 flex justify-between items-center shadow-xl">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-20 h-20 ml-4" />
        <h1 className="ml-3 text-lg font-bold text-green-100">Db</h1>
      </div>
      <form>
        <input
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          autoFocus
          className="mr-4 py-2 px-4 rounded-md focus:outline-none"
        />
      </form>
    </header>
  );
};

export default Header;

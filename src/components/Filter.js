import React from 'react';

const Filter = () => {
  return (
    <div>
      <div className="flex justify-end items-center p-3 mt-3">
        <label htmlFor="category" className="text-green-100 font-bold">
          Filter By
        </label>
        <select
          name="category"
          className="rounded ml-3 mr-2 bg-green-700 text-green-100"
        >
          <option value="breakingBad">Breaking Bad</option>
          <option value="betterCallSaul">Better Call Saul</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;

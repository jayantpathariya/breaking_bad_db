import React from 'react';

const Pagination = ({ totalPages, handleClick, prevPage, nextPage, index }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  console.log(index);

  return (
    <div className="flex justify-center p-5">
      <button
        onClick={prevPage}
        className="px-4 py-2 bg-green-500 m-2 rounded font-bold text-green-200 hover:bg-white hover:text-green-500 transition-colors duration-500"
      >
        Prev
      </button>
      {pages.map((page) => {
        return (
          <button
            onClick={() => handleClick(page)}
            key={page}
            className={`px-4 py-2 ${
              index === page ? 'bg-white text-green-500' : 'bg-green-500'
            } m-2 rounded font-bold text-green-200 `}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={nextPage}
        className="px-4 py-2 bg-green-500 m-2 rounded font-bold text-green-200 hover:bg-white hover:text-green-500 transition-colors duration-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

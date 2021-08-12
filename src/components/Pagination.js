import React from 'react';

const Pagination = ({ totalPages, handleClick, prevPage, nextPage, index }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);
  console.log(index);

  return (
    <div className="flex justify-center p-5">
      <button
        onClick={prevPage}
        className="lg:px-4 lg:py-2 px-2 py-1 bg-green-500 m-2 rounded font-bold text-green-200 hover:bg-white hover:text-green-500 transition-colors duration-500"
      >
        Prev
      </button>
      {pages.map((page) => {
        return (
          <button
            onClick={() => handleClick(page)}
            key={page}
            className={`lg:px-4 lg:py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 px-2 py-1 ${
              index === page ? 'bg-white text-green-500' : 'bg-green-500'
            } m-2 rounded font-bold text-green-200 `}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={nextPage}
        className="lg:px-4 lg:py-2 sm:px-4 sm:py-2  px-2 py-1 bg-green-500 m-2 rounded font-bold text-green-200 hover:bg-white hover:text-green-500 transition-colors duration-500"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

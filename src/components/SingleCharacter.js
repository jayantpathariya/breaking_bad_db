import React from 'react';

const SingleCharacter = ({ name, birthday, img, status, occupation }) => {
  return (
    <div>
      <div className="bg-green-600 m-3 rounded overflow-hidden shadow-lg relative character-container">
        <img src={img} alt={name} className="w-full max-h-xs object-fit" />
        <h3 className="text-center p-2 font-bold text-green-100">{name}</h3>
        <div className="absolute bg-green-600 bottom-0 left-0 right-0 text-green-50 p-2 character-info font-bold">
          <h2 className="text-xl text-center mb-2"> {name}</h2>
          <hr className="mb-2" />
          <p>Birthday: {birthday}</p>
          <p>Status: {status}</p>
          <p>Occupation: {occupation.join()}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCharacter;

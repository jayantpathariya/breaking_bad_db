import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import logo from '../assets/Breaking_Bad_logo.svg';
import Loading from '../components/Loading';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [quotes, setQuotes] = useState([]);

  const characterUrl = `https://breakingbadapi.com/api/characters/${id}`;
  const quotesUrl = `https://breakingbadapi.com/api/quotes/${id}`;

  const fetchCharacter = useCallback(async () => {
    setIsLoading(true);
    const responseCharacter = await axios(characterUrl);
    const responseQuotes = await axios(quotesUrl);
    const dataCharacter = responseCharacter.data[0];
    const dataQuotes = responseQuotes.data[0];
    setQuotes(dataQuotes);
    setCharacter(dataCharacter);
    setIsLoading(false);
  }, [characterUrl, quotesUrl]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  const {
    appearance,
    birthday,
    img,
    name,
    nickname,
    occupation,
    portrayed,
    status,
  } = character;

  const { quote } = quotes;

  return (
    <div>
      <header className="bg-green-600 shadow-xl">
        <div className="flex items-center">
          <Link className="flex items-center" to="/">
            <img src={logo} alt="logo" className="w-20 h-20 ml-4" />
            <h1 className="ml-3 text-lg font-bold text-green-100">Db</h1>
          </Link>
          <h1 className="text-green-100 ml-8 font-bold text-3xl">{name}</h1>
        </div>
      </header>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="relative flex justify-center items-center h-full mt-16">
          <div className="bg-black bg-opacity-50 h-auto z-10 lg:w-3/6 rounded-lg overflow-hidden">
            <div className=" top-3 p-4 rounded flex lg:flex-row lg:max-w-xs flex-col">
              <img src={img} alt={name} className="w-full rounded" />
              <div className="lg:min-w-full ml-5 text-green-100 font-bold pt-5 lg:pt-0">
                <h1 className="mb-2 text-2xl text-center">{name}</h1>
                <hr className="mb-3" />
                <h2 className="mb-2">Status: {status}</h2>
                <h2 className="mb-2">D.O.B: {birthday}</h2>
                <h2 className="mb-2">Occupation: {occupation}</h2>
                <h2 className="mb-2">Nickname: {nickname}</h2>
                <h2 className="mb-2">Portrayer: {portrayed}</h2>
                <h2 className="mb-2">Appearance: {appearance}</h2>
                <hr className="mb-3" />
                <h1 className="text-center text-2xl">Quotes</h1>
                <blockquote className="text-center font-dancing text-2xl">
                  "{quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;

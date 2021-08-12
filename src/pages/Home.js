import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import CharacterList from '../components/CharacterList';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  const charactersPerPage = 10;
  const startIndex = (page - 1) * charactersPerPage;
  const selectedCharacters = characters.slice(
    startIndex,
    startIndex + charactersPerPage
  );

  const characterUrl = `https://breakingbadapi.com/api/characters?name=${query}`;

  const fetchCharacter = async (url) => {
    setIsLoading(true);
    const response = await axios(url);

    const data = response.data.slice();
    setCharacters(data);

    setTotalPages(Math.ceil(data.length / 10));

    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacter(characterUrl);
  }, [query, characterUrl]);

  const handleClick = (num) => {
    setPage(num);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > pages.length) {
        nextPage = 1;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 1) {
        prevPage = pages.length;
      }
      return prevPage;
    });
  };

  return (
    <div>
      <Header getSearchTerm={(e) => setQuery(e)} />
      <Filter />
      <CharacterList
        selectedCharacters={selectedCharacters}
        page={page}
        isLoading={isLoading}
      />
      {!isLoading && (
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          totalPages={totalPages}
          handleClick={handleClick}
          index={page}
        />
      )}
    </div>
  );
};

export default Home;

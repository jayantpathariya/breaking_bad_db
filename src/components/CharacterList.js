import SingleCharacter from './SingleCharacter';
import Loading from '../components/Loading';

const CharacterList = ({ selectedCharacters, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-20 gap-2 mt-10">
          {selectedCharacters.length > 0 &&
            selectedCharacters.map((character) => {
              return <SingleCharacter key={character.char_id} {...character} />;
            })}
        </div>
      )}
    </div>
  );
};

export default CharacterList;

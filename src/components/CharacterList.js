import SingleCharacter from './SingleCharacter';
import Spinner from '../components/Spinner';

const CharacterList = ({ selectedCharacters, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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

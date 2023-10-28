import { UseFetchCharacters } from "../hooks/UseFetchCharacters";
import { CardCharacter } from "../components/CardCharacter";
// import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { UseCounter } from "../hooks/Counter";
import { IsLoading } from "../components/IsLoading";
import { Footer } from "../components/Footer";
import { finalIndex } from "../helpers/GetDataCharacters";

export const CharacterList = (  ) => {
  const { counter, dec, inc } = UseCounter();
  const { characters, isLoading } = UseFetchCharacters(counter);
  return (
    <div className="profile-area">
      <div className="container">
        {isLoading ? (
           <IsLoading />
        ) : (
          <div className="row pb-3">
            {characters.map((character) => {
              return (
                <div className="col-md-3 mb-3" key={character.id}>
                  <CardCharacter
                    name={character.name}
                    image={character.image}
                    gender={character.gender}
                    status={character.status}
                    origin={character.origin}
                    img={character.img}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
            <Footer 
            isLoading = {isLoading} 
            dec= {dec} 
            inc= {inc} 
            counter = { counter} 
            finalIndex = {finalIndex}
          />
    </div>
  );
};

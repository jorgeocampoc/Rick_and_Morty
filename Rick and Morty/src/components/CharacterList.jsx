import { UseFetchCharacters } from "../hooks/UseFetchCharacters";
import { CardCharacter } from "./CardCharacter";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const CharacterList = () => {
  const { characters, isLoading } = UseFetchCharacters();



  return (

      <div className="profile-area">
                <div className="container">
            
            {
                      (isLoading)? <Skeleton count={2}/>:
            <div className="row">

              {
                characters.map((character) => {
                  return (
                  
                  <div className="col-md-3 mb-3" key={character.id}>
                    <CardCharacter                
                    name = {character.name}
                    image = {character.image}
                    gender = {character.gender}
                    status = {character.status}
                    origin = {character.origin}
                    img = {character.img}
                  />
                  </div>
                
                );
              })
              }
            </div>

                }
          </div>
      </div>
    
  );
};

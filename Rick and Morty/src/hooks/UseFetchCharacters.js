import { useEffect, useState } from "react";
import { GetDataCharacters } from "../helpers/GetDataCharacters";

export const UseFetchCharacters = ( index ) => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = async () => {
    {  
      setIsLoading(true)
    }
    const newCharacters = await GetDataCharacters( index );
      setCharacters(newCharacters);
      setTimeout(function(){
      setIsLoading(false)
  }, 1000);
  };

  useEffect(() => {
    getCharacters();
  }, [index]);

  return {
    characters,
    isLoading,
  };
};

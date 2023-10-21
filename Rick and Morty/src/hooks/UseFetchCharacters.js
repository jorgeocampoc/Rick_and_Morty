import { useEffect, useState } from "react";
import { GetDataCharacters } from "../helpers/GetDataCharacters";

export const UseFetchCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCharacters = async () => {
    const newCharacters = await GetDataCharacters();
    await setCharacters(newCharacters);
      setTimeout(function(){
      setIsLoading(false)
  }, 1000);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return {
    characters,
    isLoading,
  };
};

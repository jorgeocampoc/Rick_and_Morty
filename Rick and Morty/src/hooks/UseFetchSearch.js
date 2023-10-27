import { useEffect, useState } from "react"
import { GetDataSearch } from "../helpers/GetDataSearch";

export const UseFetchSearch = ( name,status, gender, page ) => {

    const [character, setCharacter] = useState([]);
    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const getDataCharacter = async () =>{
      {
        setIsLoading(true);
      }
      const {characters, info } = await GetDataSearch( name,status, gender, page );
      setCharacter(characters);
      setInfo(info);
      setIsLoading(false);
    } 

    useEffect(() => {
     
        getDataCharacter();
      
    }, [name, page, status])
    

  return { character, info, isLoading }
}

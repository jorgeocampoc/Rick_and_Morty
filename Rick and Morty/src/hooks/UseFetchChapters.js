import React, { useEffect, useState } from 'react'
import { GetEpisodes } from '../helpers/GetEpisodes';

export const UseFetchChapters = ( index ) => {

    const [chapters, setChapters] = useState([]);
    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const getDataChapters = async () =>{
        {
            setIsLoading( true );
        }
        const {chapters, info} = await GetEpisodes( index );
        setChapters(chapters);
        setInfo(info);
        setIsLoading(false);
    }
    useEffect(() => {
        getDataChapters();
      }, [ index ]);


  return {chapters, isLoading, info};
}

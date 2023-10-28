

export const GetEpisodes = async ( page = 1 ) => {
    try {
        const api = `https://rickandmortyapi.com/api/episode?page=${page}`;
        const res = await fetch( api );
        if( !res.ok ){
            return { chapters: [], info:{ count:1, next:null, pages:1,prev:null } };
        }

        const data = await res.json();
        if (!data || !data.results || data.results.length === 0) {
            return { chapters: [], info:{ count:1, next:null, pages:1,prev:null } };
        }
        const { info, results } = data;
        const chapters = results.map( ({ id, name, episode, air_date }) => ({
            id,
            name,
            episode,
            air_date
        } ) )

        return {
            chapters,
            info
        }


    } catch (error) {
        return { chapters: [], info:{ count:1, next:null, pages:1,prev:null } };
    }
}

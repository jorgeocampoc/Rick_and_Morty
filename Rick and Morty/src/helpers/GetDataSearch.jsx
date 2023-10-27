export const GetDataSearch = async (name = '', status = '', gender = '', page = '') => {
  try {
    const api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`;
    const res = await fetch(api);
    if (!res.ok ) {
      
      return { characters: [], info:{ count:1, next:null, pages:1,prev:null } };

    }
    

    const data = await res.json();
    if (!data || !data.results || data.results.length === 0) {
      return { characters: [], info:{ count:1, next:null, pages:1,prev:null } };
    }
   

    const { results, info } = data;

    const characters = results.map(({ id, name, status, image, gender, origin, species }) => ({
      id,
      name,
      status,
      image,
      gender,
      origin: origin.name,
      species,
      img: species === 'Human'
        ? 'https://p4.wallpaperbetter.com/wallpaper/140/900/941/rick-and-morty-adult-swim-cartoon-morty-smith-wallpaper-preview.jpg'
        : 'https://okdiario.com/img/2023/02/19/ovni-655x368.jpg',
    }));
    return { characters, info };
  } catch (error) {
    console.error("Error en GetDataSearch:", error);
    return { characters: [], info:{ count:1, next:null, pages:1,prev:null } };
  }
};

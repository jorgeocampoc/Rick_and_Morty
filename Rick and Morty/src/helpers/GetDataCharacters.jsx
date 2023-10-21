

export const GetDataCharacters = async () => {
    const api = 'https://rickandmortyapi.com/api/character';
    const res = await fetch(api);
    const { results } = await res.json();
    const characters = await results.map( res =>({
        id: res.id,
        name: res.name,
        status: res.status,
        image: res.image,
        gender:res.gender,
        origin: res.origin.name,
        species: res.species,
        img: ''
        
    }));
    characters.map( res => {
        if(res.species === 'Human'){
            res.img = 'https://p4.wallpaperbetter.com/wallpaper/140/900/941/rick-and-morty-adult-swim-cartoon-morty-smith-wallpaper-preview.jpg'
        }else{
            res.img = "https://okdiario.com/img/2023/02/19/ovni-655x368.jpg"
        }
    })
    console.log(characters);
    return characters;
}



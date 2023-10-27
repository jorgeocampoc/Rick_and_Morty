export let finalIndex= '';
export const GetDataCharacters = async ( index ) => {

    

    const api = `https://rickandmortyapi.com/api/character?page=${index}`;
    const res = await fetch(api);
    const { results, info } = await res.json();
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
    const {pages} = info;
    finalIndex = pages;
    
    characters.map( res => {
        if(res.species === 'Human'){
            res.img = 'https://p4.wallpaperbetter.com/wallpaper/140/900/941/rick-and-morty-adult-swim-cartoon-morty-smith-wallpaper-preview.jpg'
        }else{
            res.img = "https://okdiario.com/img/2023/02/19/ovni-655x368.jpg"
        }
    })
    
    return characters;
}








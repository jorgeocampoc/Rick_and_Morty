import { CharacterList } from "./components/CharacterList"
import { Pagination } from "./components/Pagination"


export const App = () => {
  return (
    <>
    <div className="container ">
  
  <div className="bg-body-bg text-white p-6 fixed-top titulo">

      <div className="text-center display-4 py-3 " >Rick and Morty</div>

    
      <Pagination />
  </div>
      <CharacterList/>
    </div>
    </>
  )
}

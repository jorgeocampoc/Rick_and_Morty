import { NavList } from "./components/NavList";
import { AppRouter } from "./router/AppRouter";


export const App = () => {
  return (
    <>
      <div className="container ">
        <div className="bg-body-bg text-white p-2  titulo">
          <div className="text-center display-4 py-3 pt-3 pb-5 ">Rick and Morty</div>
          <NavList/>
          
        </div>
        <AppRouter/>
        {/* <footer className="footer  fixed">
        <div className="container ">
        <Pagination />
        </div>
        </footer> */}
      </div>
    </>
  );
};

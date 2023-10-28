import { NavList } from "./components/NavList";
import { AppRouter } from "./router/AppRouter";


export const App = () => {
  return (
    <>
      <div className="">
        <div className="bg-body-bg text-white   ">
        <div className="text-center  pt-3  bg-dark spacing-letter mb-3 display-5   ">
  RICK AND MORTY
</div>
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

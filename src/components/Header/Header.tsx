import {CallUser} from "./CallUser";
import {SearchBar} from "./SearchBar";
import { Carrousel } from "./Carrousel";
import { Link } from "react-router";
import {ROUTES} from "../../config/routes";

export const Header = () => {
  return (

    <header className="h-[130px] sticky top-0 flex flex-col ">
      <div className="h-[70px] flex flex-row justify-between bg-[var(--dark)] items-center gap-4 px-[10%]">
        <div className="flex flex-row items-center">  
          <Link to={ROUTES.HOME}>
            <img src="./public/logo-dark.png" alt="Logo" className="h-[60px]" />
          </Link>
          <div className="hidden md:block">
              <SearchBar />
          </div>
        </div>
        <CallUser />
      </div>

      <Carrousel  />
    </header>


  );
};

export default Header;

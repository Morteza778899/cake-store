import { useLocation } from "react-router-dom";
import MiddleHeader from "./MIddleHeader";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <TopHeader />
      {location.pathname === "/" ? (
        <>
          <MiddleHeader />
          <NavHeader />
        </>
      ) : null}
    </header>
  );
};
export default Header;

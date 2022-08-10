import { useLocation } from "react-router-dom";
import NavHeader from "./NavHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <TopHeader />
    </header>
  );
};
export default Header;

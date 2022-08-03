import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DashboardLayout from "./dashboardLayout/DashboardLayout";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
const Div = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template: max-content auto / auto max-content;
  div.children {
    grid-column: 1/2;
    grid-row: 2/3;
 position: relative;

  }
`;
const MainLayout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/dashboard" || location.pathname === "/dashboard/courses" ? (
        <Div>
          <DashboardLayout />
          <div className="children">{children}</div>
        </Div>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};
export default MainLayout;

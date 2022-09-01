import { ThemeProvider } from "@mui/material";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import DashboardLayout from "./dashboardLayout/DashboardLayout";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { theme } from "./theme";
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
    <ThemeProvider theme={theme}>
      {location.pathname === "/dashboard" ||
      location.pathname === "/dashboard/courses" ||
      location.pathname === "/dashboard/users" ? (
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
    </ThemeProvider>
  );
};
export default MainLayout;

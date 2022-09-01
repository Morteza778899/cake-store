import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  grid-column: 2/3;
  grid-row: 2/3;
  justify-self: end;
  width: 250px;
  height: 100%;
  ul {
    direction: rtl;
    li {
      border-bottom: 1px solid #eaeff42d;
      color: white;
      a {
        display: block;
        width: 100%;
        height: 100%;
        padding-inline: 10px;
        padding: 15px;
        text-decoration: none;
        opacity: 0.5;
        &.main {
          ${(props) =>
            props.location == "/dashboard" &&
            "opacity: 1; background-color: #6d6d6d;"}
        }
        &.active:not(.main) {
          opacity: 1;
          background-color: #6d6d6d;
        }
      }
    }
  }
`;

const AsideDash = () => {
  const location = useLocation();
  return (
    <Nav className="bg-dark" location={location.pathname}>
      <ul className="list-unstyled">
        <li>
          <NavLink className="main" to="/dashboard">
            <span className="icon-dashboard mx-1"></span>
            داشبورد
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/courses">
            <span className="icon-graduation-cap mx-1"></span>
            دوره ها
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/users">
            <span className="icon-graduation-cap mx-1"></span>
            کاربران
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
};
export default AsideDash;

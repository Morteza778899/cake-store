import { useEffect, useState } from "react";
import styled from "styled-components";
import Sticky from "react-sticky-el";

const Div = styled.div`
  height: 70px;
  background-color: #202c45;
  nav {
    ul {
      direction: rtl;
      color: white;
      li {
        cursor: pointer;
        width: max-content;
        padding: 5px;
        padding-inline: 15px;
        border-radius: 30px;
        font-size: 15px;
        color: white;
        text-decoration: none;
        @media (hover: hover) {
          //این بلاک مدیا برای این است که خاصیت هاور برای دستگاه های لمسی نباشد تا مشکلاتی بوجود نیاورد
          &:hover {
            background-color: white;
            color: #202c45;
          }
        }
        &.active {
          background-color: white;
          color: #202c45;
        }
        transition: all 0.5s;
      }
    }
  }
`;

const NavHeader = () => {
  const [navStatus, setNavStatus] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  const updateScroll = () => {
    let scr = Math.floor(window.scrollY / 100);
    if (scr < 8) {
      setNavStatus("home");
    } else if (scr > 7 && scr < 14) {
      setNavStatus("aboutUs");
    } else if (scr > 13) {
      setNavStatus("courses");
    }
  };
  const handler = (y) => {
    window.scroll({
      top: y,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Sticky stickyStyle={{ zIndex: "1000" }} mode={"top"}>
      <Div>
        <nav className="navbar h-100 container d-flex justify-content-end align-items-center">
          <ul className="list-inline m-0">
            <li className={`list-inline-item m-0 ${navStatus === "home" && "active"}`} onClick={() => handler(0)}>
              خانه
            </li>
            <li className={`list-inline-item m-0 ${navStatus === "aboutUs" && "active"}`} onClick={() => handler(1000)}>
              درباره ما
            </li>
            <li className={`list-inline-item m-0 ${navStatus === "courses" && "active"}`} onClick={() => handler(1550)}>
              دوره ها
            </li>
            <li className="list-inline-item m-0">اساتید</li>
            <li className="list-inline-item m-0">گالری</li>
            <li className="list-inline-item m-0">وبلاگ</li>
            <li className="list-inline-item m-0">تماس با ما</li>
          </ul>
        </nav>
      </Div>
    </Sticky>
  );
};
export default NavHeader;

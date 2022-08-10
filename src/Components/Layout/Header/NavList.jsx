import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";

const NavList = ({ openHandler, location }) => {
  const [navStatus, setNavStatus] = useState("home");

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [location]);

  const updateScroll = () => {
    const floor = (num) => {
      return Math.floor(num / 100);
    };
    let scr = floor(window.scrollY);
    if (scr < floor(location.coursesY)) {
      setNavStatus("home");
    } else if (scr < floor(location.aboutUsY)) {
      setNavStatus("courses");
    } else if (scr < floor(location.callUsY)) {
      setNavStatus("aboutUs");
    } else if (scr > floor(location.callUsY)) {
      setNavStatus("callUs");
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
    <nav className="h-100 container">
      <ul className="list-inline m-0">
        <Stack
          gap={1}
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
        >
          <li
            className={`list-inline-item m-0 ${
              navStatus === "home" && "active"
            }`}
            onClick={() => {
              openHandler(false);
              handler(0);
            }}
          >
            خانه
          </li>
          <li
            className={`list-inline-item m-0 ${
              navStatus === "courses" && "active"
            }`}
            onClick={() => {
              openHandler(false);
              handler(location.coursesY);
            }}
          >
            دوره ها
          </li>
          <li
            className={`list-inline-item m-0 ${
              navStatus === "aboutUs" && "active"
            }`}
            onClick={() => {
              openHandler(false);
              handler(location.aboutUsY);
            }}
          >
            درباره ما
          </li>
          <li className="list-inline-item m-0">گالری</li>
          <li className="list-inline-item m-0">وبلاگ</li>
          <li
            className={`list-inline-item m-0 ${
              navStatus === "callUs" && "active"
            }`}
            onClick={() => {
              openHandler(false);
              handler(999999);
            }}
          >
            تماس با ما
          </li>
        </Stack>
      </ul>
    </nav>
  );
};
export default NavList;

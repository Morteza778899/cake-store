import AboutUs from "./aboutUs/AboutUs";
import { Helmet } from "react-helmet";
import NavHeader from "../../Layout/Header/NavHeader";
import { useState } from "react";
import Slider from "./slider/Slider";
import Courses from "./courses/Courses";
import styled from "styled-components";
const Section = styled.section`
  width: 100%;
  position: relative;
`;
const HomePage = () => {
  const [location, setLocation] = useState({});

  const locationHandler = () => {
    const coursesY = window.document.getElementById("courses").offsetTop;
    const aboutUsY = window.document.getElementById("aboutus").offsetTop - 50;
    const callUsY = window.document.getElementById("footer").offsetTop - 50;
    setLocation({
      coursesY,
      aboutUsY,
      callUsY,
    });
  };

  return (
    <div onLoad={locationHandler}>
      <Helmet>
        <title>سایت آموزشگاهی</title>
      </Helmet>
      <main>
        <NavHeader location={location} />
          <Slider />
          <Courses />
        <AboutUs />
      </main>
    </div>
  );
};
export default HomePage;

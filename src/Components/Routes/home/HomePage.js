import AboutUs from "./aboutUs/AboutUs";
import { Helmet } from "react-helmet";
import NavHeader from "../../Layout/Header/NavHeader";
import { useState } from "react";
import Slider from "./slider/Slider";
import Courses from "./courses/Courses";
import { useEffect } from "react";


const HomePage = () => {
  const [location, setLocation] = useState({});


  useEffect(() => {
    const coursesY = window.document.getElementById("courses").offsetTop;
    const aboutUsY = window.document.getElementById("aboutus").offsetTop - 50;
    const callUsY = window.document.getElementById("footer").offsetTop - 50;
    setLocation({
      coursesY,
      aboutUsY,
      callUsY,
    });
  }, [])

  return (
    <>
      <Helmet>
        <title>جواد حافظیان | صفحه اصلی</title>
      </Helmet>
      <NavHeader location={location} />
      <Slider />
      <Courses />
      <AboutUs />
    </>
  );
};
export default HomePage;

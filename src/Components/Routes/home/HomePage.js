import AboutUs from "./aboutUs/AboutUs"
import Home from "./home/Home"
import Courses from './courses/Courses'
import { Helmet } from "react-helmet"
const HomePage = ()=>{
    return (
      <>
      <Helmet>
        <title>سایت آموزشگاهی</title>
      </Helmet>
        <main>
          <Home />
          <AboutUs />
          <Courses />
        </main>
        </>
    )
}
export default HomePage
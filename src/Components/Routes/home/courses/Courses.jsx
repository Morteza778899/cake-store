import styled from "styled-components";
import config from "../../../../services/config.json";
// Core modules imports are same as usual
import { Autoplay, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.scss"; // core Swiper
import "swiper/modules/pagination/pagination.scss"; // Pagination module
import "swiper/modules/autoplay/autoplay.scss";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Section = styled.section`
  margin-top: 70px;
  width: 100%;
  background-color: #f7f7f7;
  .swiper-title {
    position: relative;
    align-self: center;
    font-size: 2rem;
    font-weight: nor;
    margin-top: 15px;
    span.red {
      position: relative;
      color: #f2184f;
      ::after {
        position: absolute;
        content: "";
        height: 2px;
        bottom: 2px;
        right: 20px;
        left: auto;
        width: 80px;
        background-color: #f2184f;
      }
    }
    a {
      text-decoration: none;
      color: unset;
      span.all {
        opacity: 0.5;
        margin-right: 10px;
        font-size: 1rem;
        text-decoration-line: underline;
        text-decoration-style: dotted;
        text-underline-offset: 1px;
      }
    }
  }
  .swiper {
    width: 100%;
    overflow-x: clip;
    overflow-y: visible;
    padding-bottom: 140px;
    .swiper-slide {
      background-color: #eeeeee;
      :active {
        cursor: grab;
      }
      a.link {
        height: 100%;
        img {
          width: 100%;
          height: 225px;
        }
      }
      .details {
        width: 100%;
        position: relative;
        h4 {
          font-size: 18px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          ::after {
            position: absolute;
            content: "";
            height: 2px;
            top: 40px;
            right: 20px;
            left: auto;
            width: 50px;
            background-color: #f2184f;
          }
        }
        p {
          height: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        a {
          background-color: #202c45;
          border-color: #202c45;
        }
      }
    }
    .swiper-pagination {
      position: absolute;
      bottom: 60px;
      .swiper-pagination-bullet {
        background: none;
        width: 12px;
        height: 12px;
        border: 2px solid #202c45;
        opacity: 1;
        transition: all 0.5s;
      }
      .swiper-pagination-bullet-active {
        background-color: #202c45;
      }
    }
  }
`;

const Courses = () => {
  const courses = useSelector((state) => state.courses);
  let filterCourses = courses.slice(-8).reverse(); // دریافت هشتای آخر و برعکس کردن آن برای به ترتیب آخر شدن
  // چون میخوام جدیدترین عضو آرایه که میشه آخرین عضو آرایه اولین عضو آرایه باشه
  //  تا به این صورت هشتا عضو به ترتیب جدید بودنشون رو داشته باشم
  return (
    <Section className="course-container">
      <div className="container" id='cors'>
        <h2 className="swiper-title py-5">
          <span className="red">جدیدترین</span> دوره‌ها
          <Link to="/courses">
            <span className="all">همه دوره‌ها</span>
          </Link>
        </h2>
        <Swiper
          className=""
          spaceBetween={10}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
            waitForTransition: false, //بخاطر این فالس کردم که تشخیص زمانش برای ساخت پراگرس بار بهم میریخت
            // یا حداقل برای این روشی که من نوشتم بهم میریخت
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
          dir="rtl"
          slidesPerView={4}
          slidesPerGroup={4}
          effect={"slide"}
          speed={1000}
        >
          {filterCourses.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="card">
                <Link className="link" to={`/course/${item._id}`}>
                  <img
                    className="card-img-top"
                    src={`${config.toplearnapi}/${item.imageUrl}`}
                    alt="Card image"
                  />
                </Link>
                <div className="card-body details">
                  <h4 className="card-title">{item.title}</h4>
                  <p className="card-text">{item.info}</p>
                  <Link to={`/course/${item._id}`} className="btn btn-primary">
                    تماشای جزئیات
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Section>
  );
};
export default Courses;

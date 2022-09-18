import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { loadingHandler } from "../../../Redux/Action/loadingAction";
import config from "../../../services/config.json";
import Paginat from "./Paginat";
import svg from '../../../images/Ellipsis-3.6s-200px.svg'
import { setCurrentPage } from "../../../Redux/Action/currentPageAction";
const Div = styled.div`
  .card {
    box-shadow: 0 0 7px 0 #eaeff4;
    border: 1px solid #ecf0f4;
    border-radius: 5px;
    a.link {
      height: 100%;
      span {
        // این اسپن از پشت پرده از کامپوننت لیزی لود اومد
        width: 100%;
        height: 100%;
        img {
          padding: 2px;
          width: 100%;
          height: 225px;
          border-radius: 5px;
        }
      }
    }
    .details {
      width: 100%;
      position: relative;
      h4 {
        direction: rtl;
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
        :hover {
          color: #7a132d;
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
        :hover {
          background-color: #070e1d;
        }
      }
    }
  }
`;

const Courses = () => {
  const dispatch = useDispatch();
  // استیت صفحه فعلی یا کرنت پیج را به این دلیل در ریداکس گداشتم که
  // وقتی کاربر هر وقتی به این صفحه اومد دوباره استیت یک نشه
  // و صفحه ی اول دوره ها نمایش داده نشه
  const currentPage = useSelector((state) => state.currentPage);
  const pageHandler = (num) => {
    dispatch(setCurrentPage(num))
  };

  const courses = useSelector((state) => state.courses);
  // در اینجا تعداد آیتم در هر صفحه 2 میباشد
  //  که میتوان همه ی 2 های پایین را به هر عدد داخواهی تغییر داد
  let arrayX8 = courses.filter((value, index) => index >= (currentPage - 1) * 2 && index <= currentPage * 2 - 1);
  let countPage = Math.ceil(courses.length / 2);

  // از آنجایی که این صفحه هیج ارتباط با سروری ندارد و روی لودینگ کاری نمیکند
  // ممکن است در حالی که اودینگ ترو میابشد کاربر به این صفحه بیاید و در حالت لودینگ بماند
  useEffect(() => {
    dispatch(loadingHandler(false));
  }, []);
  return (
    <Div className="col-9">
      <div className="row">
        {arrayX8.map((item) => (
          <div key={item._id} className="col-4 mb-4">
            <div className="card">
              <Link className="link" to={`/course/${item._id}`}>
                <LazyLoadImage
                  className="card-img-top"
                  alt="Card image"
                  src={`${config.toplearnapi}/${item.imageUrl}`}
                  effect="blur"
                  placeholderSrc={svg}
                />
              </Link>
              <div className="card-body details">
                <Link className="link text-decoration-none text-black" to={`/course/${item._id}`}>
                  <h4 className="card-title">{item.title}</h4>
                </Link>
                <p className="card-text">{item.info}</p>
                <Link to={`/course/${item._id}`} className="btn btn-primary float-start">
                  تماشای جزئیات
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Paginat countPage={countPage} currentPage={currentPage} pageHandler={pageHandler} />
    </Div>
  );
};
export default Courses;

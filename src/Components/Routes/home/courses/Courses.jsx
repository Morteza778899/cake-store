import { Button, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  z-index: 20;
  .swiper-title {
    position: relative;
    align-self: center;
    font-size: 2rem;
    font-weight: nor;
    margin-top: 15px;
    span.red {
      position: relative;
      color: #f2184f;
    }
    span.all {
      opacity: 0.5;
      margin-right: 10px;
      font-size: 1rem;
      text-decoration-line: underline;
      text-decoration-style: dotted;
      text-underline-offset: 1px;
     }
    span {
      font-weight: 900;
    }
  }
  /* @media (hover: none) { */
    input[type="checkbox"]:checked ~ .hover-container {
      transform: rotateY(180deg);
    }
  /* } */
  .cards {
    cursor: pointer;
    height: 300px;
    perspective: 1000px; //با این کد المنت در حال چرخش ارتفاع بیشتری پیدا میکند و قشنگ تر میشود
    .hover-container {
      height: 100%;
      display: grid;
      transform-style: preserve-3d;
      transition: all 0.5s;
      .front {
        grid-row: 1/2;
        grid-column: 1/2;
        border: 3px solid #eeeeee;
        display: grid;
        align-items: center;
        overflow: hidden;
        div {
          height: 100%;
          text-align: center;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
          button {
            position: absolute;
            width: fit-content;
            height: fit-content;
            right: 0;
            left: 0;
            margin-inline: auto;
            top: 0;
            bottom: 0;
            margin-top: auto;
            margin-bottom: auto;
            cursor: default;
            h6 {
              display: -webkit-box;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 1; /* number of lines to show */
              line-clamp: 1;
              -webkit-box-orient: vertical;
              max-height: 1.8em;
              line-height: 1.8em;
            }
          }
        }
        backface-visibility: hidden;
      }
      .back {
          width:100% ;
        grid-row: 1/2;
        grid-column: 1/2;
        background-color: #202c45;
        transform: rotateY(180deg);
        h3 {
          margin: 40px;
          margin-inline: 20px;
          text-align: center;
          font-size: 28px;
          color: #f2194e;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1; /* number of lines to show */
          line-clamp: 1;
          -webkit-box-orient: vertical;
          max-height: 1.8em;
          line-height: 1.8em;
        }
        p {
          font-size: 14px;
          color: white;
          text-align: center;
          margin-inline: 30px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3; /* number of lines to show */
          line-clamp: 3;
          -webkit-box-orient: vertical;
          max-height: 5.4em;
          line-height: 1.8em;
        }
        button {
          position: absolute;
          width: fit-content;
          height: fit-content;
          background-color: #d4d4d4;
          color: black;
          bottom: 30px;
          left: 0;
          right: 0;
          margin-inline: auto;
          z-index: 1000;
        }
        backface-visibility: hidden;
      }
    }
  }
`;

const Courses = () => {
  const courses = useSelector((state) => state.courses);
  const navigate = useNavigate();
  return (
    <Div className="card-detail" id="courses">
      <div className="container">
        <Typography variant="h4" className="swiper-title pb-5">
          <span className="red">جدیدترین</span> <span>دوره‌ها</span>
          <span className="all">برای شرکت در هر دوره روی عکس دوره‌ها کلیک کنید</span>
        </Typography>
        <Grid container justifyContent='center'>
          {
            courses.length === 0 && (
              <Typography variant='subtitle1' width={1} textAlign='center'>تاکنون هیچ دوره ای در پایگاه داده ثبت نشده است</Typography>
            )
          }
          {courses.map((item) => (
            <Grid item xs={12} sm={9} md={6} lg={4} p={1} key={item._id}>
              <label htmlFor={item._id} style={{ display: "unset" }}>
                <div className="cards col-lg mb-2 mb-lg-0">
                  <input
                    type="checkbox"
                    id={item._id}
                    style={{ display: "none" }}
                  ></input>
                  <div className="hover-container">
                    <div className="front">
                      <div>
                        <img
                          src={`${item.image.imageLink}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="back">
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                      <Button
                        variant="contained"
                        onClick={() => navigate(`/course/${item._id}`)}
                      >
                        شرکت در دوره
                      </Button>
                    </div>
                  </div>
                </div>
              </label>
            </Grid>
          ))}
        </Grid>
      </div>
    </Div>
  );
};
export default Courses;

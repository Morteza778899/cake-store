import { useSelector } from "react-redux";
import styled from "styled-components";

const Div = styled.div`
width: 100%;
height: 100%;
  div.row {
    width: 300px;
    height: 130px;
    border-radius: 5px;
    div {
      p.courses-counter {
        font-size: 50px;
      }
      p.text {
        margin-top: -20px;
      }
    }
    span.icon {
      font-size: 90px;
    }
  }
`;

const Dashboard = () => {
  const courses = useSelector((state) => state.courses);
  return (
    <Div>
      <div className="row bg-info mx-auto my-4">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <p className="courses-counter m-0">{courses.length}</p>
          <p className="text">تعداد دوره ها</p>
        </div>
        <span className="icon icon-graduation-cap col-6 text-center my-auto"></span>
      </div>
      <div className="row bg-info mx-auto my-4">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <p className="courses-counter m-0">nun</p>
          <p className="text">تعداد کاربران ها</p>
        </div>
        <span className="icon icon-person col-6 text-center my-auto"></span>
      </div>
    </Div>
  );
};
export default Dashboard;

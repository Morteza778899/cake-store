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
    span.icon-graduation-cap {
      font-size: 90px;
    }
  }
`;

const Dashboard = () => {
  return (
    <Div>
      <div className="row bg-info mx-auto my-4">
        <div className="col-6 d-flex flex-column justify-content-center align-items-center">
          <p className="courses-counter m-0">22</p>
          <p className="text">تعداد دوره ها</p>
        </div>
        <span className="icon-graduation-cap col-6 text-center my-auto"></span>
      </div>
    </Div>
  );
};
export default Dashboard;

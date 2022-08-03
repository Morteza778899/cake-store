import logo from "../../../images/logo-wide.png";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  height: 85px;
  img {
    width: 280px;
    height: 65%;
  }
  div.phone-number,
  div.opening-time {
    span {
      font-size: 40px;
      color: #202c45;
      &.icon-time {
        font-size: 45px;
      }
    }
    p {
      margin: 0px;
      font-size: 14px;
      &.top {
        font-weight: bold;
        opacity: 0.5;
      }
      &.bottom {
        direction: ltr;
      }
    }
  }
`;
const MiddleHeader = () => {
  return (
    <Div>
      <div className="h-100 container d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <div className="phone-number d-flex">
            <div>
              <p className="top">همین امروز به ما زنگ بزن</p>
              <p className="bottom text-start">+98 911 488 0469</p>
            </div>
            <span className="icon-phone-square mx-3"></span>
          </div>
          <div className="opening-time d-flex">
            <div>
              <p className="top">ساعات پاسخگویی ما</p>
              <p className="bottom">شنبه تا چهارشنبه - 8:00 تا 16:00</p>
            </div>
            <span className="icon-time mx-2"></span>
          </div>
        </div>
        <img src={logo} alt="logo" className="" />
      </div>
    </Div>
  );
};
export default MiddleHeader;

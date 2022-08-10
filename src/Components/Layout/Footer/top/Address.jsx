import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
const Div = styled.div`
  img {
    width: fit-content;
  }
  h4 {
    text-align: center;
  }
  div {
    display: flex;
    flex-direction: row-reverse;
    span {
      color: #f2184f;
      margin-top: 3px;
    }
    p {
      color: #8d8d8d;
      margin: 0px;
    }
  }
  .connect-us {
    .media-icon {
      cursor: pointer;
      color: rgb(102, 102, 102);
      padding: 3px;
      outline: 1px solid rgb(102, 102, 102);
      outline-offset: 2px;
      :hover {
        color: white;
        background-color: rgba(102, 102, 102, 0.849);
      }
      transition: all 0.5s;
    }
  }
`;

const Address = () => {
  return (
    <Div className="col d-flex flex-column p-4">
      <h4>راه‌های ارتباطی</h4>
      <p style={{ color: "#666666" }} className="my-3">
        ایران، تهران، میدان آزادی، کنار برج میلاد، خیابان امام حسین
      </p>
      <div className="my-1">
        <span className="icon-call"></span>
        <p className="ms-2">+98 911 488 0469</p>
      </div>
      <div className="my-1">
        <span className="icon-email"></span>
        <p className="ms-2">myemail@gmail.com</p>
      </div>
      <div className="my-1">
        <span className="icon-globe"></span>
        <p className="ms-2">www.mywebsite.com</p>
      </div>
      <div className="connect-us my-1">
        <div className="icons">
          <LinkedInIcon className="media-icon m-2" />
          <InstagramIcon className="media-icon m-2" />
          <GoogleIcon className="media-icon m-2" />
          <TwitterIcon className="media-icon m-2" />
          <FacebookIcon className="media-icon m-2" />
        </div>
      </div>
    </Div>
  );
};
export default Address;

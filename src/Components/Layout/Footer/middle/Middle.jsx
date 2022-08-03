import styled from "styled-components";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Div = styled.div`
  .call-us {
    p {
      font-size: 15px;
      color: rgb(102, 102, 102);
      margin: 0px;
      direction: ltr;
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
  .subscribe-us {
    .input-group {
      button {
        background-color: #f2184f;
        border-radius: 5px !important;
        border-bottom-left-radius: 0px !important;
        border-top-left-radius: 0px !important;
      }
      input {
        border-radius: 5px !important;
        border-bottom-right-radius: 0px !important;
        border-top-right-radius: 0px !important;
        font-size: 16px;
      }
    }
  }
`;

const Middle = () => {
  return (
    <Div className="row">
      <div className="col-2 call-us">
        <h5 className="mb-3">تماس با ما</h5>
        <p>+98 3 1234 5678</p>
        <p>+98 3 1234 5678</p>
      </div>
      <div className="col-5 connect-us">
        <h5 className="mb-3"> ارتباط با ما</h5>
        <div className="icons">
          <LinkedInIcon className="media-icon m-2" />
          <InstagramIcon className="media-icon m-2" />
          <GoogleIcon className="media-icon m-2" />
          <TwitterIcon className="media-icon m-2" />
          <FacebookIcon className="media-icon m-2" />
        </div>
      </div>
      <div className="col-5 subscribe-us">
        <h5 className="mb-3">اشتراک ویژه</h5>
        <div>
          <div className="input-group">
            <input type="email" className="search-text form-control py-2" placeholder="Your Email" />
            <button type="button" className="btn w-25">
              <strong>اشتراک ویژه</strong>
            </button>
          </div>
        </div>
      </div>
    </Div>
  );
};
export default Middle;

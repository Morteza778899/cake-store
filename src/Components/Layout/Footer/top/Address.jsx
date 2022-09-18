import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
const Div = styled.div`
  img {
    width: fit-content;
  }
  h4 {
    text-align: center;
  }
  div {
    display: flex;
    align-items:center ;
    flex-direction: row-reverse;
    svg {
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
        مازندران، بابل، چهارراه گله محله، خیابان شهید بسطامی
      </p>
      <div className="my-1">
        <WhatsAppIcon />
        <p style={{ direction: 'ltr' }} className="ms-2">+98 901 444 8945</p>
      </div>
      <div className="my-1">
        <EmailIcon />
        <p className="ms-2">javadhafezian97@gmail.com</p>
      </div>
      <div className="my-1">
        <PublicIcon />
        <p className="ms-2">www.hafeziancake.com</p>
      </div>
      <div className="connect-us my-1">
        <div className="icons">
          <LinkedInIcon className="media-icon m-2" />
          <a href="https://instagram.com/javad_hafezian?igshid=YmMyMTA2M2Y=" target='blank'>
            <InstagramIcon className="media-icon m-2" />
          </a>
          <GoogleIcon className="media-icon m-2" />
          <TwitterIcon className="media-icon m-2" />
          <FacebookIcon className="media-icon m-2" />
        </div>
      </div>
    </Div>
  );
};
export default Address;

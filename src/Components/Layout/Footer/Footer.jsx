import styled from "styled-components";

import image from "../../../images/bg2.jpg";

import Address from "./top/Address";
import UsefulLink from "./top/UsefulLink";
import Twitter from "./top/Twitter";
import Hours from "./top/Hours";


import Middle from "./middle/Middle";

const FooterStyle = styled.footer`
  background: url(${image});
  height: 600px;
  margin-top: 50px;
  color: white;
  .black-layer {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    background-color: #000000d1;
  }
  .middle {
    border-top: 1px solid #8d8d8d40;
  }
  
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="black-layer pt-5">
        <div className="container">
          <div className="top">
            <div className="row">
              <Hours />
              <Twitter />
              <UsefulLink />
              <Address />
            </div>
          </div>
          <div className="middle my-5 py-5">
            <Middle />
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};
export default Footer;

import styled from "styled-components";

import image from "../../../images/bg2.jpg";

import Address from "./top/Address";
import UsefulLink from "./top/UsefulLink";
import Twitter from "./top/Twitter";

import { Grid } from "@mui/material";

const FooterStyle = styled.footer`
  background: url(${image});
  margin-top: 50px;
  color: white;
  .black-layer {
    padding: 0px;
    margin: 0px;
    width: 100%;
    height: 100%;
    background-color: #000000d1;
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className="black-layer pt-5" id='footer'>
        <div className="container">
          <div className="top">
            <Grid container>
              <Grid item xs={12} md={4} lg={4}>
                <Twitter />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <UsefulLink />
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <Address />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </FooterStyle>
  );
};
export default Footer;

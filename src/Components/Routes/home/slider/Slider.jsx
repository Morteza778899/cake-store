import { useState } from "react";
import styled from "styled-components";
import Slide from "./Slide";
import image1 from "../../../../images/bg2.jpg";
import image2 from "../../../../images/bg3.jpg";
import image3 from "../../../../images/bg4.jpg";
import next from "../../../../images/navigate_next.svg";
import before from "../../../../images/navigate_before.svg";

import Progress from "./Progress";

const Div = styled.div`
  position: relative;
  /* width: 100%; */
  height: 65vw;
  min-height: 450px;
  max-height: 700px;
  /* overflow: hidden; */
  .swiper {
    width: 100%;
    height: 100%;
    .swiper-button-next::after,
    .swiper-button-prev::after {
      display: none;
    }
    .swiper-button-next {
      background-color: #0000007b;
      background-image: url(${before});
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
    }
    .swiper-button-prev {
      background-color: #0000007b;
      background-image: url(${next});
      background-repeat: no-repeat;
      background-size: 100% auto;
      background-position: center;
    }

    .swiper-slide {
      :nth-child(1) {
        position: relative;
        background-image: url(${image1});
        background-size: cover;
        background-position: top right;
      }
      :nth-child(2) {
        position: relative;
        background-image: url(${image2});
        background-size: cover;
        background-position: center center;
      }
      :nth-child(3) {
        position: relative;
        background-image: url(${image3});
        background-size: cover;
        background-position: top left;
      }
      .title {
        width: fit-content;
        height: fit-content;
        color: white;
        display: grid;
        &.slide-1-title {
          grid-template: auto;
          justify-items: center;
          div {
            overflow: hidden;
          }
          h5 {
            background-color: #00000099;
            padding: 5px;
            padding-inline: 20px;
            margin-inline: 5px;
            text-align: center;
            border-radius: 30px;
            box-shadow: -4px 0px #f2184f, 4px 0px #f2184f;
          }
          h4 {
            margin: 10px;
            padding: 5px;
            padding-inline: 30px;
            background-color: #202c4599;
            border-radius: 40px;
          }
          p {
            text-align: center;
            margin: 0px;
          }
          button {
            padding: 3px;
            padding-inline: 15px;
            margin: 10px;
            border: 1px solid white;
            background: none;
            color: white;
            border-radius: 20px;
            transition: all 0.3s;
            &:hover {
              background-color: white;
              color: black;
              cursor: pointer;
            }
          }
        }
        &.slide-2-title {
          div {
            overflow: hidden;
            display: grid;
          }
          h1 {
            direction: ltr;
          }
          h4 {
            justify-self: left;
            align-self: center;
            direction: ltr;
            background-color: #202c45c8;
            width: fit-content;
            padding: 5px;
            padding-inline: 25px;
            border-left: 5px solid #f2184f;
            margin-bottom: 10px;
          }
          p {
            text-align: center;
            margin: 0px;
          }
          button {
            width: fit-content;
            justify-self: left;
            align-self: center;
            margin-top: 10px;
            background-color: #202c45c8;
            border: none;
            border-left: 5px solid #f2184f;
            color: white;
            padding: 5px;
            padding-inline: 20px;
            transition: all 0.3s;
            :hover {
              background-color: #131a2b;
              cursor: pointer;
            }
          }
        }
        &.slide-3-title {
          display: grid;
          grid-template: auto;
          justify-items: right;
          div {
            overflow: hidden;
          }
          h3 {
            background-color: #202c45c8;
            margin-bottom: 5px;
            padding-inline: 20px;
            border-right: 5px solid #f2184f;
          }
          h5 {
            background-color: #000000a0;
            width: fit-content;
            padding: 5px;
            padding-inline: 25px;
            margin-bottom: 5px;
          }
          p {
            text-align: center;
            margin: 0px;
          }
          button {
            margin-top: 10px;
            background-color: #202c45c8;
            border: none;
            border-right: 5px solid #f2184f;
            color: white;
            padding: 5px;
            padding-inline: 20px;
            transition: all 0.3s;
            :hover {
              background-color: #131a2b;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

const Slider = () => {
  const [change, setChange] = useState(0);
  const changeHandler = () => {
    setChange(change + 1);
  };
  return (
    <Div className="slider">
      <Progress change={change} />
      <Slide changeHandler={changeHandler} />
    </Div>
  );
};
export default Slider;

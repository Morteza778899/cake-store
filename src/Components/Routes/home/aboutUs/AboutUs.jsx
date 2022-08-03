import { useState } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";
import styled from "styled-components";
import image1 from "../../../../images/ab1.jpg";
import image2 from "../../../../images/ab2.jpg";
import image3 from "../../../../images/ab3.jpg";
const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template: auto/repeat(8, 1fr);
  overflow: hidden;
  .content {
    grid-column: 2/8;
    display: grid;
    grid-template: auto/1fr 1fr;
    .images {
      width: fit-content;
      grid-row: 1/2;
      grid-column: 1/2;
      display: grid;
      grid-template: 1fr 1fr / 1fr 1fr;
      img {
        margin: 5px;
      }
      .img-top {
        grid-row: 1/2;
        grid-column: 1/3;
      }
    }
    .details {
      grid-row: 1/2;
      grid-column: 2/3;
      display: grid;
      h2 {
        margin: 10px;
        font-size: 2rem;
      }
      h4 {
        font-size: 18px;
        height: 50px;
        direction: rtl;
        font-weight: normal;
        margin: 10px;
      }
      p {
        font-size: 14px;
        margin-inline: 10px;
        margin-left: 30px;
      }
      button {
        width: fit-content;
        height: fit-content;
        justify-self: right;
        align-self: top;
        font-size: 14px;
        margin-inline: 10px;
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
  .hidden {
    opacity: 0;
  }
`;

const AboutUs = () => {
  const [animeScrol, setAnimeScrol] = useState(false);

  function onChange(isVisible) {
    if (isVisible) {
      setAnimeScrol(true);
    }
  }

  return (
    <Section id="about-Us">
      <div className="content">
        <ReactVisibilitySensor partialVisibility={true}  onChange={onChange}>
          <div
            className={`images animate__animated ${
              animeScrol ? "animate__fadeInLeft animate__slow" : "hidden"
            }`}
          >
            <img src={image1} alt="" className="img-top" />
            <img src={image2} alt="" className="img-bottom" />
            <img src={image3} alt="" className="img-bottom" />
          </div>
        </ReactVisibilitySensor>

        <ReactVisibilitySensor partialVisibility={true} onChange={onChange}>
          <div
            className={`details animate__animated  ${
              animeScrol ? "animate__fadeInRight animate__slow" : "hidden"
            }`}
          >
            <h2>به قالب آموزشگاهی خوش آمدید</h2>
            <h4>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
              بااستفاده از طراحان گرافیک است
            </h4>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در
            </p>
            <button>بیشتر بخوانید</button>
          </div>
        </ReactVisibilitySensor>
      </div>
    </Section>
  );
};
export default AboutUs;

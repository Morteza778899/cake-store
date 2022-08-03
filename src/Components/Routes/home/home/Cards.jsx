import styled from "styled-components";

const Div = styled.div`
  position: relative;
  top: -80px;
  z-index: 20;
  .cards {
    height: 300px;
    perspective: 1000px;  //با این کد المنت در حال چرخش ارتفاع بیشتری پیدا میکند و قشنگ تر میشود
    :hover {
      .hover-container {
        transform: rotateY(180deg);
      }
    }
    .hover-container {
      width: 100%;
      height: 100%;
      display: grid;
      position: relative;
      transform-style: preserve-3d;
      transition: all 0.5s;
      .front {
        grid-row: 1/2;
        grid-column: 1/2;
        background-color: #f7f7f7;
        border: 3px solid #eeeeee;
        display: grid;
        align-items: center;
        div {
          text-align: center;
          span {
            font-size: 80px;
          }
          h3 {
            margin-top: 20px;
            font-size: 28px;
            font-weight: normal;
          }
        }
        backface-visibility: hidden;
      }
      .back {
        grid-row: 1/2;
        grid-column: 1/2;
        background-color: #202c45;
        transform: rotateY(180deg);
        display: grid;
        h3 {
          text-align: center;
          margin: 10px;
          margin-top: 40px;
          font-size: 28px;
          color: #f2194e;
        }
        p {
          font-size: 14px;
          color: white;
          text-align: center;
          margin-inline: 30px;
        }
        button {
          width: fit-content;
          height: fit-content;
          justify-self: center;
          border: none;
          padding: 7px;
          padding-inline: 15px;
          border-radius: 5px;
          background-color: #d4d4d4;
        }
        backface-visibility: hidden;
      }
    }
  }
`;

const Cards = () => {
  return (
    <Div className="card-detail">
      <div className='container'>
        <div className='row '>

      <div className="cards col-lg mb-2 mb-lg-0">
        <div className="hover-container">
          <div className="front">
            <div>
              <span className="icon-profile-male"></span>
              <h3>مدرسین با تجربه</h3>
            </div>
          </div>
          <div className="back">
            <h3>مدرسین با تجربه</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            </p>
            <button>بیشتر بخوانید</button>
          </div>
        </div>
      </div>
      <div className="cards col-lg mb-2 mb-lg-0">
        <div className="hover-container">
          <div className="front">
            <div>
              <span className="icon-document-certificate"></span>
              <h3>صدور گواهینامه</h3>
            </div>
          </div>
          <div className="back">
            <h3>صدور گواهینامه</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            </p>
            <button>بیشتر بخوانید</button>
          </div>
        </div>
      </div>
      <div className="cards col-lg ">
        <div className="hover-container">
          <div className="front">
            <div>
              <span className="icon-mobile"></span>
              <h3>آموزش آنلاین</h3>
            </div>
          </div>
          <div className="back">
            <h3>آموزش آنلاین</h3>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
            </p>
            <button>بیشتر بخوانید</button>
          </div>
        </div>
        </div>
      </div>
      </div>
    </Div>
  );
};
export default Cards;

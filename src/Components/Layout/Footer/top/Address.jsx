import styled from "styled-components";
import logo from "../../../../images/logo-white-footer.htm";
const Div = styled.div`
  img {
    width: fit-content;
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
`;

const Address = () => {
  return (
    <Div className="col d-flex flex-column">
      <img src={logo} alt="for logo" className="align-self-end" />
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
    </Div>
  );
};
export default Address;

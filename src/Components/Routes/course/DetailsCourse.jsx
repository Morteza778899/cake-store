import styled from "styled-components";

const Div = styled.div`
  box-shadow: 0 0 7px 0 #eaeff4;
  border: 1px solid #ecf0f4;
  border-radius: 5px;
  .price-container {
    border-bottom: 1px solid #ecf0f4;
  }
  .icon {
    margin-top: 3px;
    color: gray;
    &.icon-dollar {
      color: #f2184f;
    }
  }
  p.price-text {
    font-weight: 700;
  }
  button {
    background-color: #f2184f;
    color: white;
  }

`;

const DetailsCourse = ({ course }) => {
  return (
    <Div className="p-4">
      <div className="price-container">
        <div className='d-flex flex-row-reverse py-1'>
          <span className="icon icon-dollar mx-2"></span>
          <p className='price-text me-2' >قیمت دوره :</p>
          <span className="price">{course.price}</span>
        </div>
      </div>
      <div className="detail-container py-2 pt-4">
        <div className="d-flex flex-row-reverse ">
          <span className="icon icon-person mx-2"></span>
          <p className="me-2 opacity-75">مدرس دوره :</p>
          <p>مرتضی داداش پور</p>
        </div>
        <div className="d-flex flex-row-reverse ">
          <span className="icon icon-time mx-2"></span>
          <p className="me-2 opacity-75">مدت زمان دوره :</p>
          <span>15:40:00</span>
        </div>
        <div className="d-flex flex-row-reverse ">
          <span className="icon icon-info mx-2"></span>
          <p className="me-2 opacity-75">سطح دوره :</p>
          <p>متوسط</p>
        </div>
      </div>
      <button className='btn w-100'>ثـبتـــــــــــ نـــام در دوره</button>
    </Div>
  );
};
export default DetailsCourse;

import styled from "styled-components";

const Div = styled.div`
  box-shadow: 0 0 7px 0 #eaeff4;
  border: 1px solid #ecf0f4;
  border-radius: 5px;
  .title {
    border-bottom: 1px solid #ecf0f4;
    width: 100%;
    p {
      padding: 30px;
      text-align: center;
    }
  }
  .btn-group {
    width: 90%;
    button {
      border: 1px solid #ecf0f4;
      color: black;
      transition: all 0.3s;
      height: 44px;
      :hover {
        background-color: #f2184f;
        color: white;
      }
      :focus {
        box-shadow: none;
      }
      &.active {
        background-color: #f2184f;
        color: white;
      }
    }
  }
`;

const Filter = () => {
  return (
    <Div className="filter mb-4">
      <div className="d-flex flex-column align-items-center">
        <div className="title">
          <p className="">فیلتر براساس قیمت</p>
        </div>
        <div className="btn-group  mt-3" role="group" dir="rtl">
          <button type="button" className="btn btn-outline-primary px-4 active">
            همه
          </button>
          <button type="button" className="btn btn-outline-primary px-4">
            خریدنی
          </button>
          <button type="button" className="btn btn-outline-primary px-4">
            رایگان
          </button>
        </div>
        <div className="btn-group">
          <button type="button" className="btn btn-outline-primary my-3 btnBig">
            مخصوص اعضای ویژه
          </button>
        </div>
      </div>
    </Div>
  );
};
export default Filter;

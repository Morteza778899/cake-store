import styled from "styled-components";

const Div = styled.div`
  box-shadow: 0 0 7px 0 #eaeff4;
  border: 1px solid #ecf0f4;
  border-radius: 5px;
  select.sortBy {
    width: 280px;
    height: 48px;
    direction: rtl;
    font-size: 13px;
    border: 1px solid #edf1f4;
  }
  .input-group {
    button {
      border: 1px solid #edf1f4;
      border-right: none;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      :hover {
        color: #001ec9;
      }
      :focus {
        box-shadow: none;
      }
    }
    input.search-text {
      height: 48px;
      font-size: 14px;
      border: 1px solid #edf1f4;
      border-left: none;
      margin-left: -1px;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      :focus {
        box-shadow: none;
      }
    }
  }
`;

const Search = () => {
  return (
    <Div className="search row p-4 my-4">
      <div className="col-md-6">
        <select class="sortBy form-select">
          <option value="createAndUpdatedate" selected>
            مرتب سازی بر اساس تاریخ انتشار
          </option>
          <option value="title"> مرتب سازی بر اساس عنوان </option>
          <option value="price"> مرتب سازی بر اساس قیمت </option>
          <option value="popular"> مرتب سازی بر اساس محبوبیت </option>
        </select>
      </div>
      <div className="col-md-6">
        <div className="input-group">
          <button type="button" className="btn d-flex align-items-center rounded">
            <span class="icon-magnifier icon"></span>
          </button>
          <input
            type="text"
            className="search-text form-control rounded"
            placeholder="عنوان مورد نظر ..."
            dir="rtl"
          />
        </div>
      </div>
    </Div>
  );
};
export default Search;

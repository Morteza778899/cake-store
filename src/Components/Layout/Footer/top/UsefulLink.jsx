import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  h4 {
    text-align: center;
  }
  ul {
    direction: rtl;
    li {
      border-bottom: 1px dashed #8d8d8d4e;
      padding: 10px;
      padding-right: 15px;
      a {
        /* display: block; */
        text-decoration: none;
        color: #8d8d8d;
        font-size: 16px;
        :hover {
          color: white;
          letter-spacing: 1px;
        }
        transition: all 0.5s;
      }
    }
  }
`;

const UsefulLink = () => {
  return (
    <Div className="col link">
      <h4>لینک‌های مفید</h4>
      <ul className="list-unstyled p-1">
        <li>
          <Link to="/">درباره‌ی ما</Link>
        </li>
        <li>
          <Link to="/">دوره‌های ما</Link>
        </li>
        <li>
          <Link to="/">اشتراک ویژه</Link>
        </li>
        <li>
          <Link to="/">گالری</Link>
        </li>
        <li>
          <Link to="/">خرید</Link>
        </li>
      </ul>
    </Div>
  );
};
export default UsefulLink;

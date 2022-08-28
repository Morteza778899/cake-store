import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
grid-column: 1/3;
grid-row: 1/2;
  height: 55px;
  .dropdown {
    position: relative;
    button {
      :focus {
        box-shadow: none;
      }
    }
    span {
      margin-right: -10px;
    }
    .dropdown-container {
      position: absolute;
      border: 1px solid #eaeff4;
      background-color: #fffcf8;
      z-index: 1001;
      a {
        text-align: right;
      }
    }
  }
`;

const HeaderDash = () => {
  const [dropdown, setDropdown] = useState(false);
  const dropdownBox = useRef(null);
  const dropdownBtn = useRef(null);

  useEffect(() => {
    /**
     * hide if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (
        dropdownBox.current &&
        !dropdownBox.current.contains(event.target) &&
        !dropdownBtn.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownBox]);

  return (
    <Header className="d-flex justify-content-between flex-row-reverse px-5 py-2 bg-dark">
      <h4 className="text-white-50 align-self-center m-0">پنل مدیریت سایت</h4>
      <div className="dropdown">
        <div className="d-flex align-items-center">
          <span className="icon-arrow_drop_down text-white-50 "></span>
          <button className="btn text-white-50" type="button" onClick={() => setDropdown(!dropdown)} ref={dropdownBtn}>
            پنل کاربری
          </button>
        </div>
        {dropdown && (
          <ul className="dropdown-container list-unstyled" ref={dropdownBox}>
            <li>
              <Link className="dropdown-item" to="/profile">
                پروفایل
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/">
                مشاهده سایت
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/logout">
                خروج
              </Link>
            </li>
          </ul>
        )}
      </div>
    </Header>
  );
};
export default HeaderDash;

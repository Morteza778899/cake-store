import { useState } from "react";
import styled from "styled-components";
import BuyModal from "./BuyModal";

const Div = styled.div`
  * {
    scrollbar-width: thin;
    scrollbar-color: #80808075;
  }
  /* Works on Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }
  *::-webkit-scrollbar-track {
    background: none;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #80808075;
    border-radius: 20px;
  }

  div.table-container {
    height: 400px;
    overflow: auto;
    table {
      width: fit-content;
      th {
        text-align: center;
        position: relative;
        div {
          span {
            font-size: 30px;
            line-height: 10px;
            opacity: 0.5;
            cursor: pointer;
            :hover {
              color: red;
            }
            &.down {
              left: 0;
              bottom: 10px;
            }
            &.up {
              left: 0;
              top: 10px;
            }
          }
        }
      }
      td {
        vertical-align: middle;
      }
    }
  }
`;

const Table = ({ arrayX8 }) => {
  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});

  const UpdateModalHandler = (bool, item) => {
    setUser(item);
    setOpen(bool);
  };

  return (
    <Div className="container">
      {open && (
        <BuyModal
          UpdateModalHandler={UpdateModalHandler}
          open={open}
          user={user}
        />
      )}

      <div className="table-container">
        <table className="table table-striped table-hover mx-auto" dir="rtl">
          <thead>
            <tr>
              <th
                style={{
                  width: "300px",
                  maxWidth: "300px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                شماره موبایل کاربر
              </th>
              <th style={{ width: "fit-content" }}>خرید دوره</th>
              <th style={{ width: "fit-content" }}>حذف</th>
            </tr>
          </thead>
          <tbody>
            {arrayX8.map((user) => (
              <tr key={user._id}>
                <td
                  style={{
                    maxWidth: "300px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {user.phone}
                </td>

                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => UpdateModalHandler(true, user)}
                  >
                    خرید دوره
                  </button>
                </td>

                <td>
                  <button className="btn btn-danger">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Div>
  );
};
export default Table;

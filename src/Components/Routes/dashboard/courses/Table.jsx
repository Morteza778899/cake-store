import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { deleteCourse } from "../../../../Redux/Action/courseAction";
import { toastUpdate } from "../../../utils/toast";
import EditModal from "./EditModal";
import EpisodeModal from "./EpisodeModal";

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
              opacity: ${(props) => (props.sortStatus == "des" ? "1" : ".5")};
            }
            &.up {
              left: 0;
              top: 10px;
              opacity: ${(props) => (props.sortStatus == "asc" ? "1" : ".5")};
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

const Table = ({ arrayX8, sortHandler, sortStatus }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteCourse(id));
  };

  // const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [openEP, setOpenEP] = useState(false);
  const [item, setItem] = useState({});

  const UpdateModalHandler = (bool, item) => {
    setItem(item);
    setOpen(bool);
  };
  const EpisodeModalHandler = (bool, item) => {
    setItem(item);
    setOpenEP(bool);
  };

  return (
    <Div className="container" sortStatus={sortStatus}>
      {open && (
        <EditModal
          UpdateModalHandler={UpdateModalHandler}
          course={item}
          open={open}
        />
      )}

      {openEP && (
        <EpisodeModal
        EpisodeModalHandler={EpisodeModalHandler}
          course={item}
          setCourse={setItem}
          open={openEP}
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
                عنوان دوره
              </th>
              <th style={{ width: "fit-content" }}>تصویر دوره</th>
              <th
                style={{ width: "fit-content", paddingInline: "30px" }}
                className="d-flex"
              >
                قیمت دوره (تومان)
                <div className="d-flex flex-column">
                  <span
                    className="icon-arrow_drop_up up"
                    onClick={() => sortHandler("asc")}
                  ></span>
                  <span
                    className="icon-arrow_drop_down down"
                    onClick={() => sortHandler("des")}
                  ></span>
                </div>
              </th>
              <th style={{ width: "fit-content" }}>ویرایش</th>
              <th style={{ width: "fit-content" }}>قسمت‌های دوره</th>
              <th style={{ width: "fit-content" }}>حذف</th>
            </tr>
          </thead>
          <tbody>
            {arrayX8.map((item) => (
                <tr key={item._id}>
                  <td
                    style={{
                      maxWidth: "300px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.title}
                  </td>
                  <td>
                    <a
                      className="btn btn-primary"
                      target="_blank"
                      href={item.image.imageLink}
                      rel="noreferrer"
                    >
                      نمایش عکس
                    </a>
                  </td>
                  <td style={{ textAlign: "center" }}>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => UpdateModalHandler(true, item)}
                    >
                      ویرایش
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => EpisodeModalHandler(true, item)}
                    >
                      قسمت‌ها
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteHandler(item._id)}
                    >
                      حذف
                    </button>
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

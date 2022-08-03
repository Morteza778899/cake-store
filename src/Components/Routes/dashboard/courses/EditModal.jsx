import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { updateCourse } from "../../../../Redux/Action/courseAction";

const Div = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.514);
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  .modal-holder {
    background-color: white;
    width: 700px;
    border: 5px solid rgba(0, 0, 0, 0.603);
    border-radius: 10px;
    form {
      direction: rtl;
    }
  }
`;

const EditModal = ({ UpdateModalHandler, course }) => {
  const [title, setTitle] = useState(course.title);
  const [price, setPrice] = useState(course.price);
  const [imageUrl, setImageUrl] = useState(course.imageUrl);
  const [info, setInfo] = useState(course.info);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formHandler = async (e, id) => {
    e.preventDefault();
    setLoading(true);

    let data = new FormData();
    data.append("title", title);
    data.append("price", Number.parseInt(price));
    if (e.target.imageUrl.files[0]) {
      data.append("imageUrl", e.target.imageUrl.files[0]);
    } else {
      data.append("imageUrl", imageUrl);
    }
    data.append("info", info);

    await dispatch(updateCourse(id, data));

    UpdateModalHandler(false);
    setLoading(false);
  };
  
  return (
    <Div className="modal-container d-flex justify-content-center align-items-center">
      <div className="modal-holder animate__animated animate__fadeInDown">
        <form className="m-3" onSubmit={(e) => formHandler(e, course._id)}>
          <input
            type="text"
            name="tilte"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان دوره"
            className="form-control my-1"
          />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="قیمت دوره"
            className="form-control my-1"
          />
          <input type="file" name="imageUrl" className="form-control my-1" />
          <textarea
            name="info"
            className="form-control my-1"
            onChange={(e) => setInfo(e.target.value)}
            value={info}
            placeholder="توضیحات مربوطه ی درباره ی دوره"
            rows="10"
          ></textarea>
          <button type="submit" className={`btn btn-success m-2 ${loading && "disabled"}`}>
            ساخت دوره
          </button>
          <button
            type="button"
            className={`btn btn-danger m-2 ${loading && "disabled"}`}
              onClick={() => UpdateModalHandler(false)}
          >
            انصراف
          </button>
        </form>
      </div>
    </Div>
  );
};
export default EditModal;

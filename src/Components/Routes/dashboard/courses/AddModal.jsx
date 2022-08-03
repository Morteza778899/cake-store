import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { addCourse } from "../../../../Redux/Action/courseAction";
import { toastUpdate } from "../../../utils/toast";

const Div = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.514);
  width: 100%;
  height: 100%;
  top: 0px;
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

const AddModal = ({ AddModalHandler }) => {
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tos = toast.loading("در حال بارگذاری اطلاعات");
    try {
      let data = new FormData();
      data.append("title", title);
      data.append("price", Number.parseInt(price));
      data.append("imageUrl", e.target.imageUrl.files[0]);
      data.append("info", info);
      await dispatch(addCourse(data));
      AddModalHandler(false);
      setLoading(false);
      toastUpdate(tos, "success", "دوره با موفقیت اضافه شد");
    } catch (error) {
      console.log(error);
      toastUpdate(tos, "error", "دوره اضافه نشد");
      setLoading(false);
    }
  };

  return (
    <Div className="modal-container d-flex justify-content-center align-items-center">
      <div className="modal-holder animate__animated animate__fadeInDown">
        <form className="m-3" onSubmit={(e) => formHandler(e)}>
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
            onClick={() => AddModalHandler(false)}
          >
            انصراف
          </button>
        </form>
      </div>
    </Div>
  );
};
export default AddModal;

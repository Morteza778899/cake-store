import { InputLabel, MenuItem, Select } from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import styled from "styled-components";
import { addCourse } from "../../../../Redux/Action/courseAction";
import { addCourseService } from "../../../../services/courseService";
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
  const [teacher, setTeacher] = useState();
  const [price, setPrice] = useState();
  const [level, setLevel] = useState();
  const [body, setBody] = useState();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 8 کاراکتر نباید باشد",
        max: "بیشتر از 100 کاراکتر نباید باشد",
      },
      element: (message) => (
        <div style={{ color: "red" }} className="form-text">
          {message}
        </div>
      ),
    })
  );
  const [, forceUpdate] = useState();

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tos = toast.loading("در حال بارگذاری اطلاعات");
    try {
      if (validator.current.allValid()) {
        let course = new FormData();
        course.append("title", title);
        course.append("teacher", teacher);
        course.append("level", level);
        course.append("price", Number.parseInt(price));
        course.append("image", e.target.image.files[0]);
        course.append("body", body);
        const { data } = await addCourseService(course);
        await dispatch(addCourse(data.courses));
        AddModalHandler(false);
        setLoading(false);
        toastUpdate(tos, "success", data.message);
      } else {
        validator.current.showMessages();
        forceUpdate(1);
        setLoading(false);
        toastUpdate(tos, "error", "اطلاعات وارد شده نامعتبر است");
      }
    } catch (err) {
      toastUpdate(tos, "error", err.response.data.message);
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
            onChange={(e) => {
              setTitle(e.target.value);
              validator.current.showMessageFor("tilte");
            }}
            placeholder="عنوان دوره"
            className="form-control my-1"
          />
          {validator.current.message("tilte", title, "required|min:8|max:100")}

          <input
            type="text"
            name="teacher"
            value={teacher}
            onChange={(e) => {
              setTeacher(e.target.value);
              validator.current.showMessageFor("teacher");
            }}
            placeholder="مدرس دوره"
            className="form-control my-1"
          />
          {validator.current.message("teacher", teacher, "required")}

          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
              validator.current.showMessageFor("price");
            }}
            placeholder="قیمت دوره"
            className="form-control my-1"
          />
          {validator.current.message("price", price, "required")}

          <InputLabel id="demo-simple-select-label" sx={{my:1,mt:3}}>سطح دوره</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="level"
            value={level}
            label="level"
            fullWidth
            onChange={(e) => {
              setLevel(e.target.value);
              validator.current.showMessageFor("level");
            }}
          >
            <MenuItem value={"elementary"}>مقدماتی</MenuItem>
            <MenuItem value={"medium"}>متوسط</MenuItem>
            <MenuItem value={"professional"}>پیشرفته</MenuItem>
          </Select>
          {validator.current.message("level", level, "required")}

          <input type="file" name="image" className="form-control my-1" />

          <textarea
            name="body"
            className="form-control my-1"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
              validator.current.showMessageFor("body");
            }}
            placeholder="توضیحات مربوطه ی درباره ی دوره"
            rows="10"
          ></textarea>
          {validator.current.message("body", body, "required")}

          <button
            type="submit"
            className={`btn btn-success m-2 ${loading && "disabled"}`}
          >
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

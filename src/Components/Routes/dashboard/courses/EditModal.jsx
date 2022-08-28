import {
  Box,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import styled from "styled-components";
import { updateCourse } from "../../../../Redux/Action/courseAction";
import {
  editCourseService,
} from "../../../../services/courseService";
import { toastUpdate } from "../../../utils/toast";

const EditModel = ({ UpdateModalHandler, course, open }) => {
  const [title, setTitle] = useState(course.title);
  const [teacher, setTeacher] = useState(course.teacher);
  const [price, setPrice] = useState(course.price);
  const [level, setLevel] = useState(course.level);
  const [body, setBody] = useState(course.body);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
console.log(course)
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
        let newCourse = new FormData();
        newCourse.append("title", title);
        newCourse.append("teacher", teacher);
        newCourse.append("level", level);
        newCourse.append("price", Number.parseInt(price));
        if (e.target.image.files[0]) {
          // ارسال عکس در ادیت دوره الزامی نیست
          newCourse.append("image", e.target.image.files[0]);
        }
        newCourse.append("body", body);
        const { data } = await editCourseService(course._id, newCourse);
        await dispatch(updateCourse(course._id, data.newCourse));
        UpdateModalHandler(false);
        setLoading(false);
        toastUpdate(tos, "success", data.message);
      } else {
        validator.current.showMessages();
        forceUpdate(1);
        setLoading(false);
        toastUpdate(tos, "error", "اطلاعات وارد شده نامعتبر است");
      }
    } catch (err) {
      console.log(err);
      toastUpdate(tos, "error", err.response.data.message);
      setLoading(false);
    }
  };

  return (
    <Modal open={open} sx={{ overflow: "auto", py: 5 }}>
      <Box
        className="modal-holder animate__animated animate__fadeInDown"
        sx={{
          width: 1,
        }}
      >
        <Box
          sx={{
            maxWidth: 700,
            bgcolor: "white",
            mx: "auto",
            p: 3,
            borderRadius: 1,
          }}
        >
          <form
            className="m-3"
            onSubmit={(e) => formHandler(e)}
            style={{ direction: "rtl" }}
          >
            <InputLabel id="tilte-label" sx={{ my: 1, mt: 3 }}>
              عنوان دوره
            </InputLabel>
            <input
              labelId="tilte-label"
              type="text"
              name="tilte"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                validator.current.showMessageFor("tilte");
              }}
              className="form-control my-1"
            />
            {validator.current.message(
              "tilte",
              title,
              "required|min:8|max:100"
            )}

            <InputLabel id="text-label" sx={{ my: 1, mt: 3 }}>
              مدرس دوره
            </InputLabel>
            <input
              labelId="text-label"
              type="text"
              name="teacher"
              value={teacher}
              onChange={(e) => {
                setTeacher(e.target.value);
                validator.current.showMessageFor("teacher");
              }}
              className="form-control my-1"
            />
            {validator.current.message("teacher", teacher, "required")}

            <InputLabel id="number-label" sx={{ my: 1, mt: 3 }}>
              قیمت دوره
            </InputLabel>
            <input
              labelId="number-label"
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                validator.current.showMessageFor("price");
              }}
              className="form-control my-1"
            />
            {validator.current.message("price", price, "required")}

            <InputLabel id="demo-simple-select-label" sx={{ my: 1, mt: 3 }}>
              سطح دوره
            </InputLabel>
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
              sx={{mb:3}}
            >
              <MenuItem value={"elementary"}>مقدماتی</MenuItem>
              <MenuItem value={"medium"}>متوسط</MenuItem>
              <MenuItem value={"professional"}>پیشرفته</MenuItem>
            </Select>
            {validator.current.message("level", level, "required")}

            <input type="file" name="image" className="form-control my-1" />
            <FormHelperText sx={{textAlign:'right',mb:3}}>
              در صورت خالی گذاشتن فایل، همان عکس قبلی برای این دوره باقی خواهد
              ماند
            </FormHelperText>

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
              تغییر دوره
            </button>
            <button
              type="button"
              className={`btn btn-danger m-2 ${loading && "disabled"}`}
              onClick={() => UpdateModalHandler(false, {})}
            >
              انصراف
            </button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};
export default EditModel;

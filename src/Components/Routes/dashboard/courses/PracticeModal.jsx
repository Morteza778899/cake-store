import {
  Avatar,
  Box,
  Button,
  FormHelperText,
  InputLabel,
  ListItem,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateCourse } from "../../../../Redux/Action/courseAction";
import {
  deletePracticeService,
  getUrlPracticeService,
  uploadPracticeService,
} from "../../../../services/courseService";
import { toastUpdate } from "../../../utils/toast";
import SimpleReactValidator from "simple-react-validator";
import LinearProgressWithLabel from "../../../utils/LinearProgressWithLabel";

const PracticeModal = ({ PracticeModalHandler, course, setCourse, open }) => {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 4 کاراکتر نباید باشد",
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
    setProgress(0);
    setLoading(true);
    const tos = toast.loading("در حال بارگذاری اطلاعات");
    try {
      if (validator.current.allValid()) {
        let practice = new FormData();
        practice.append("title", title);
        practice.append("image", e.target.image.files[0]);
        const { data } = await uploadPracticeService(course._id, practice, (event) => {
          setProgress(Math.round((100 * event.loaded) / event.total));
        });
        await dispatch(updateCourse(course._id, data.course));
        setCourse(data.course);
        setLoading(false);
        toastUpdate(tos, "success", data.message);
        setProgress(0);
      } else {
        setProgress(0);
        validator.current.showMessages();
        forceUpdate(1);
        setLoading(false);
        toastUpdate(tos, "error", "اطلاعات وارد شده نامعتبر است");
      }
    } catch (err) {
      setProgress(0);
      console.log(err);
      toastUpdate(tos, "error", err.response.data.message);
      setLoading(false);
    }
  };

  const deleteHandler = async (obj) => {
    setLoading(true);
    const tos = toast.loading("در حال بارگذاری اطلاعات");
    try {
      const { data } = await deletePracticeService(obj);
      await dispatch(updateCourse(course._id, data.course));
      setCourse(data.course);
      setLoading(false);
      toastUpdate(tos, "success", data.message);
    } catch (err) {
      console.log(err);
      toastUpdate(tos, "error", err.response.data.message);
      setLoading(false);
    }
  }

  const handleChange = async (key) => {
    try {
      const data = await getUrlPracticeService({
        key: key,
        courseId: course._id,
      });
      window.location.href = data.data.url
    } catch (error) {
      toast.error(error.response.data.message)
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
              عنوان تمرین جدید
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
              "required|min:4|max:100"
            )}

            <InputLabel id="video-label" sx={{ my: 1, mt: 3 }}>
              آپلود عکس
            </InputLabel>
            <input
              labelId="video-label"
              type="file"
              name="image"
              className="form-control my-1"
            />
            <LinearProgressWithLabel value={progress} />
            <FormHelperText sx={{ textAlign: "right", mb: 3 }}>
              فایل ارسالی نباید بیشتر از 4 مگابایت باشد
            </FormHelperText>

            <button
              type="submit"
              className={`btn btn-success m-2 ${loading && "disabled"}`}
            >
              اضافه کردن تمرین جدید
            </button>
            <button
              type="button"
              className={`btn btn-danger m-2 ${loading && "disabled"}`}
              onClick={() => PracticeModalHandler(false, {})}
            >
              انصراف
            </button>
          </form>

          {course.practice.map((value, index) => (
            <ListItem key={value.key} p={0} >
              <Stack gap={1} sx={{ width: 1 }}>
                <Button variant="contained" color="secondary" onClick={() => deleteHandler({ key: value.key, courseId: course._id })}>حذف</Button>
                <Button variant="contained" onClick={() => handleChange(value.key)}>دانلود</Button>
                <Typography
                  sx={{ textAlign: "right", p: 1, px: 2 }}
                  flexGrow={1}
                >
                  {value.title}
                </Typography>
                <Avatar
                  sx={{
                    border: "3px solid #bbc1c7",
                    background: "none",
                    width: 35,
                    height: 35,
                  }}
                >
                  <Typography
                    fontSize="18px"
                    fontWeight={900}
                    color="#616161"
                  >
                    {index + 1}
                  </Typography>
                </Avatar>
              </Stack>
            </ListItem>
          ))}
        </Box>
      </Box >
    </Modal >
  );
};
export default PracticeModal;

import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { buyCourseService } from "../../../../services/userService";
import { toastUpdate } from "../../../utils/toast";

const BuyModal = ({ UpdateModalHandler, user, open }) => {
  const courses = useSelector((state) => state.courses);
  const [loading, setLoading] = useState(false);
  const [courseId, setCourseId] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const tos = toast.loading("در حال بارگذاری اطلاعات");
    if (courseId == "") {
      toastUpdate(tos, "error", "انتخاب یک دوره اجباری می باشد");
      setLoading(false);
    }
    try {
      await buyCourseService(courseId, user.phone);
      UpdateModalHandler(false, user);
      setLoading(false);
      toastUpdate(tos, "success", "این دوره با موفقیت برای کاربر خریداری شد");
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
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                لیست دوره ها
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                // defaultValue="female"
                name="radio-buttons-group"
                value={courseId}
                onChange={(e) => {
                  setCourseId(e.target.value);
                }}
              >
                {courses.map((course) => (
                  <FormControlLabel
                    value={course._id}
                    control={<Radio />}
                    label={course.title}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <br />
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
export default BuyModal;

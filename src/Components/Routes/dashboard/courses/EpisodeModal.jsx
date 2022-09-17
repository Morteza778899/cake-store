import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  FormHelperText,
  InputLabel,
  LinearProgress,
  ListItem,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateCourse } from "../../../../Redux/Action/courseAction";
import {
  deleteVideoService,
  getUrlVideoService,
  uploadVideoService,
} from "../../../../services/courseService";
import { toastUpdate } from "../../../utils/toast";
import Plyr from "plyr-react";
import SimpleReactValidator from "simple-react-validator";
import LinearProgressWithLabel from "../../../utils/LinearProgressWithLabel";

const EpisodeModal = ({ EpisodeModalHandler, course, setCourse, open }) => {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const smWidth = useMediaQuery("(min-width:600px)");
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

  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: url,
          type: "video/mp4",
        },
      ],
    },
    options: {
      controls: [
        "play-large",
        "play",
        "progress",
        smWidth && "current-time",
        smWidth && "volume",
        smWidth && "settings",
        "mute",
        "pip",
        "airplay",
        "fullscreen",
      ],
    },
  };

  const formHandler = async (e) => {
    e.preventDefault();
    setProgress(0);
    setLoading(true);
    const tos = toast.loading("در حال بارگذاری اطلاعات");
    try {
      if (validator.current.allValid()) {
        let episode = new FormData();
        episode.append("title", title);
        episode.append("time", Number.parseInt(time));
        episode.append("video", e.target.video.files[0]);
        const { data } = await uploadVideoService(course._id, episode, (event) => {
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
      const { data } = await deleteVideoService(obj);
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

  const handleChange = (panel) => async (isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    try {
      const data = await getUrlVideoService({
        key: panel,
        courseId: course._id,
      });
      console.log(data.data);
      setUrl(data.data.url);
    } catch (error) {
      console.log(error.response.data.message);
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
              عنوان قسمت جدید
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

            <InputLabel id="time-label" sx={{ my: 1, mt: 3 }}>
              مدت زمان قسمت جدید به دقیقه
            </InputLabel>
            <input
              labelId="time-label"
              type="number"
              name="time"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                validator.current.showMessageFor("time");
              }}
              className="form-control my-1"
            />
            {validator.current.message("time", time, "required")}
            <InputLabel id="video-label" sx={{ my: 1, mt: 3 }}>
              آپلود فایل ویدیویی
            </InputLabel>
            <input
              labelId="video-label"
              type="file"
              name="video"
              className="form-control my-1"
            />
            <LinearProgressWithLabel value={progress}/>
            <FormHelperText sx={{ textAlign: "right", mb: 3 }}>
              فایل ارسالی نباید بیشتر از 400 مگابایت باشد
            </FormHelperText>

            <button
              type="submit"
              className={`btn btn-success m-2 ${loading && "disabled"}`}
            >
              اضافه کردن قسمت جدید
            </button>
            <button
              type="button"
              className={`btn btn-danger m-2 ${loading && "disabled"}`}
              onClick={() => EpisodeModalHandler(false, {})}
            >
              انصراف
            </button>
          </form>

          {course.episode.map((value, index) => (
            <ListItem key={value.key} p={0}>
              <Accordion
                expanded={expanded === value.key}
                onChange={handleChange(value.key)}
                sx={{
                  border: "1px dashed #d7e0e9",
                  width: 1,
                  borderRadius: 6,
                  boxShadow: "none",
                }}
              >
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Button variant="contained" onClick={() => deleteHandler({ key: value.key, courseId: course._id })}>حذف</Button>
                  <Typography sx={{ width: 1, textAlign: "left", p: 1, px: 2 }}>
                    {value.size}
                  </Typography>
                  <Typography sx={{ width: 1, textAlign: "left", p: 1, px: 2 }}>
                    {value.time} دقیقه
                  </Typography>
                  <Typography
                    sx={{ width: 1, textAlign: "right", p: 1, px: 2 }}
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
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    "& .plyr__volume": {
                      width: "fit-content",
                      minWidth: "unset",
                    },
                  }}
                >
                  <Plyr {...plyrProps} style={{ width: "100%" }} />
                </AccordionDetails>
              </Accordion>
            </ListItem>
          ))}
        </Box>
      </Box >
    </Modal >
  );
};
export default EpisodeModal;

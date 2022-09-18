import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCourse } from "../../../Redux/Action/singleCourseAction";
import ClipLoader from "react-spinners/ClipLoader";
import ContentCourse from "./ContentCourse";
import DetailsCourse from "./DetailsCourse";
import { getSingleCourseService } from "../../../services/courseService";
import { Box, Grid, useMediaQuery } from "@mui/material";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const SingleCourse = () => {
  const [loading, setLoading] = useState(true);
  const course = useSelector((state) => state.course);
  const params = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const mdWidth = useMediaQuery("(min-width:1000px)");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await getSingleCourseService(params.id);
        dispatch(getSingleCourse(data.data));
        setLoading(false);
      } catch (error) {
        if (error.response.status === 404) {
          toast.error(error.response.data.message);
          navigation("/404", { replace: true });
        } else {
          console.log(error);
        }
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>جواد حافظیان | دوره</title>
      </Helmet>
      {loading ? (
        <div
          style={{
            display: "grid",
            width: "100%",
            height: "100vh",
            justifyItems: "center",
            alignItems: "center",
          }}
        >
          <ClipLoader color={"#202c45"} size={80} />
        </div>
      ) : (
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            px: { xs: 0, sm: 2, md: 4, lg: 6 },
          }}
        >
          <Grid container>
            <Grid item xs={mdWidth ? 4 : 12} p={2}>
              <DetailsCourse course={course} />
            </Grid>
            <Grid item xs={mdWidth ? 8 : 12} p={2}>
              <ContentCourse course={course} />
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};
export default SingleCourse;

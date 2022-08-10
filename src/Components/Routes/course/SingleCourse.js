import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleCourse } from "../../../Redux/Action/singleCourseAction";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import ContentCourse from "./ContentCourse";
import DetailsCourse from "./DetailsCourse";
import { getSingleCourseService } from "../../../services/courseService";
const Div = styled.div``;
const SingleCourse = () => {
  const [loading, setLoading] = useState(false);
  const course = useSelector((state) => state.course);
  const params = useParams();
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const { data } = await getSingleCourseService(params.id);
        dispatch(getSingleCourse(data.course));
        setLoading(false);
      } catch (error) {
        // در سمت سرور درست بودن آیدی ارسالی باید چک شود
        // و اگر همچنین آیدی برای دوره ای نبود اینجا ارور ها را هندل کنیم
        // و از آنجایی که همچین اروری در سرور پیش بینی نشده بود
        //  خطای 500 میدهد و توست مشکلی از سمت سرور است میاید
        navigation("/404", { replace: true });
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
        <Div className="container ">
          <div className="row mx-5 mt-5">
            <div className="col-8 ">
              <ContentCourse course={course} />
            </div>
            <div className="col-4">
              <DetailsCourse course={course} />
            </div>
          </div>
        </Div>
      )}
    </>
  );
};
export default SingleCourse;

import { toast } from "react-toastify";
import { toastUpdate } from "../../Components/utils/toast";
import {
  addCourseService,
  deleteCourseService,
  getCoursesService,
  editCourseService,
} from "../../services/courseService";
import { loadingHandler } from "./loadingAction";

export const getCourses = () => {
  return async (dispatch) => {
    await dispatch(loadingHandler(true));
    try {
      const { data } = await getCoursesService();
      await dispatch({ type: "GET_COURSES", payload: data.courses });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-left",
        closeOnClick: true,
      });
    }
    await dispatch(loadingHandler(false));
  };
};

export const addCourse = (allCourse) => {
  return async (dispatch, getstate) => {
    await dispatch({ type: "ADD_COURSE", payload: allCourse });
  };
};

export const deleteCourse = (id) => {
  return async (dispatch, getstate) => {
    const load = toast.loading("در حال حذف دوره از سرور");
    let courses = getstate().courses;
    try {
      const { data } = await deleteCourseService(id);
      let newCourses = courses.filter((value) => value._id != id);
      await dispatch({ type: "DELETE_COURSE", payload: newCourses });
      toastUpdate(load, "info", data.message);
    } catch (error) {
      toastUpdate(load, "error", "دوره حذف نشد");
    }
  };
};

export const updateCourse = (id, courseUpdated) => {
  return async (dispatch, getstate) => {
    let courses = getstate().courses;
    let courseIndex = courses.findIndex((value) => value._id == id);
    courses[courseIndex] = { ...courseUpdated };
    await dispatch({ type: "UPDATE_COURSE", payload: courses });
  };
};

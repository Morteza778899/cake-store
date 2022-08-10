import { filter } from "lodash";
import { toast } from "react-toastify";
import { toastUpdate } from "../../Components/utils/toast";
import {
  addCourseService,
  deleteCourseService,
  getCoursesService,
  updateCourseService,
} from "../../services/courseService";
import { loadingHandler } from "./loadingAction";

export const getCourses = () => {
  return async (dispatch) => {
    // await dispatch(loadingHandler(true));
    const { data } = await getCoursesService();
    await dispatch({ type: "GET_COURSES", payload: data.courses });
    await dispatch(loadingHandler(false));
  };
};

export const addCourse = (course) => {
  return async (dispatch, getstate) => {
    const { data, status } = await addCourseService(course);
    if (status == 201) {
      await dispatch({ type: "ADD_COURSE", payload: [...getstate().courses, data.course] });
    }
  };
};

export const deleteCourse = (id) => {
  return async (dispatch, getstate) => {
    const load = toast.loading("در حال حذف دوره از سرور");
    let courses = getstate().courses;
    try {
      const { status } = await deleteCourseService(id);
      if (status == 200) {
        let newCourses = courses.filter((value) => value._id != id);
        await dispatch({ type: "DELETE_COURSE", payload: newCourses });
        toastUpdate(load, "info", "دوره با موفقیت حذف شد");
      }
    } catch (error) {
      toastUpdate(load, "error", "دوره حذف نشد");
    }
  };
};

export const updateCourse = (id, courseUpdated) => {
  return async (dispatch, getstate) => {
    const load = toast.loading("در حال ویرایش دوره ");
    let courses = getstate().courses;
    let courseIndex = courses.findIndex((value) => value._id == id);
    try {
      const { data, status } = await updateCourseService(id, courseUpdated);
      if (status == 200) {
        courses[courseIndex] = { ...data.course };
        await dispatch({ type: "UPDATE_COURSE", payload: courses });
      }
      toastUpdate(load, "success", "دوره با موفقیت ویرایش شد");
    } catch (error) {
      toastUpdate(load, "error", "دوره ویرایش نشد");
    }
  };
};

export const getSingleCourse = (course) => {
  return async (dispatch) => {
    await dispatch({ type: "GET_COURSE", payload: course });
  };
};

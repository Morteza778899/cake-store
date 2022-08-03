export const setCurrentPage = (num) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_PAGE", payload: num });
  };
};

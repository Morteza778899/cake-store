export const loadingHandler = (bool) => {
  return async (dispatch) => {
    await dispatch({ type: "TOGGLE", payload: bool });
  };
};

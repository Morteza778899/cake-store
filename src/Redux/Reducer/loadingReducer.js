export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return action.payload;
    default:
      return state;
  }
};

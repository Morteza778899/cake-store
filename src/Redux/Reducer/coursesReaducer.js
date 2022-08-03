export const coursesReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COURSES":
      return [...action.payload];
    case "ADD_COURSE":
      return [...action.payload];
    case "DELETE_COURSE":
      return [...action.payload];
    case "UPDATE_COURSE":
      return [...action.payload];
    default:
      return state;
  }
};

let initialState = {
  activePage: 1,
  allPages: 1,
};

const paginationReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ACTIVE-PAGE":
      newState.activePage = { ...state.activePage };
      newState.activePage = action.payload;
      return newState;
    case "TOTAL-PAGES":
      newState.allPages = { ...state.allPages };
      newState.allPages = action.payload;
      return newState;
    default:
      return { ...state };
  }
};

const editTotalPages = (payload) => {
  return { type: "TOTAL-PAGES", payload };
};
const changeActivePage = (current) => {
  return { type: "ACTIVE-PAGE", payload: current };
};

export { editTotalPages, changeActivePage };
export default paginationReducer;

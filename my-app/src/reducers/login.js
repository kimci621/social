import usersApi from "../api/api";
let initialState = {
  login: null,
};

const loginReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "SET-USER-LOGINDATA":
      newState.login = { ...state.login };
      newState.login = action.payload;
      return newState;
    default:
      return { ...state };
  }
};

export const setUserLoginData = (payload) => {
  return { type: "SET-USER-LOGINDATA", payload: payload };
};

export const thunkLogin = () => {
  return (dispatch) => {
    usersApi.getAuthStatus().then((res) => {
      if (res) {
        dispatch(setUserLoginData(res.login));
      }else{
        dispatch(setUserLoginData("login"));
      }
    });
  };
};

export default loginReducer;

import { authApi } from "../api/api";
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

export const loginPostThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.loginApi(email, password, rememberMe).then((res) => {
      if (res.data.resultCode === 0) {
        authApi.getAuthStatus().then((res) => {
          if (res) {
            dispatch(setUserLoginData(res.login));
          } else {
            dispatch(setUserLoginData(null));
          }
        });
      }
    });
  };
};

export const getOwnId = () => {
  return authApi.getAuthStatus().then((res) => {
    if (res) {
      return res;
    }
  });
};

export const thunkLogin = () => {
  return (dispatch) => {
    authApi.getAuthStatus().then((res) => {
      if (res) {
        dispatch(setUserLoginData(res.login));
      } else {
        dispatch(setUserLoginData(null));
      }
    });
  };
};

export const thunkLogOut = () => {
  return (dispatch) => {
    authApi.logOutApi().then((res) => {
      authApi.getAuthStatus().then((res) => {
        if (res) {
          dispatch(setUserLoginData(res.login));
        } else {
          dispatch(setUserLoginData(null));
        }
      });
    });
  };
};

export default loginReducer;

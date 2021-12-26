//reducers
import { createStore, combineReducers } from "redux";
import loginReducer from "../src/reducers/login";
import postsReducer from "../src/reducers/posts";
import dialogsReducer from "../src/reducers/dialogs";
import paginationReducer from "../src/reducers/pagination";
import isFetchingReducer from "../src/reducers/isFetching";
import profileUpdateReducer from "../src/reducers/updateProfile";
import usersReducer from "../src/reducers/users";

let allReducers = combineReducers({
  profileUpdateReducer: profileUpdateReducer,
  loginReducer: loginReducer,
  postsReducer: postsReducer,
  dialogsReducer: dialogsReducer,
  paginationReducer: paginationReducer,
  isFetchingReducer: isFetchingReducer,
  usersReducer: usersReducer,
});

let store = createStore(allReducers);

export default store;

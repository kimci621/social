//reducers
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import loginReducer from "../src/reducers/login";
import postsReducer from "../src/reducers/posts";
import dialogsReducer from "../src/reducers/dialogs";
import paginationReducer from "../src/reducers/pagination";
import isFetchingReducer from "../src/reducers/isFetching";
import profileUpdateReducer from "../src/reducers/updateProfile";
import usersReducer from "../src/reducers/users";
import videoReducer from "../src/reducers/video"

let allReducers = combineReducers({
  profileUpdateReducer: profileUpdateReducer,
  loginReducer: loginReducer,
  postsReducer: postsReducer,
  dialogsReducer: dialogsReducer,
  paginationReducer: paginationReducer,
  isFetchingReducer: isFetchingReducer,
  usersReducer: usersReducer,
  videoReducer: videoReducer
});

let store = createStore(allReducers, compose(applyMiddleware(thunk)));

export default store;

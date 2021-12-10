//reducers
import reducers from "./reducers/reducers";
import { createStore } from "redux";

let store = createStore(reducers);

export default store;


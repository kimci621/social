//libs
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//Apps
import App from "./components/App/App";
import store from "./state";
//css
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        state={store.getState()}
        store={store}
        dispatch={store.dispatch.bind(store)}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

//libs
import React from "react";
import ReactDOM from "react-dom";
//Apps
import App from "./components/App/App";
import store from "./state";
//css
import "./index.css";

let reactDomRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
//first render
reactDomRender(store.getState());
//rerender on change (function in state = reactDomRender)
store.subscriber(reactDomRender);

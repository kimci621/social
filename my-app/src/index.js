//libs
import React from "react";
import ReactDOM from "react-dom";
//Apps
import App from "./components/App/App";
// import { addPost } from "./state";
// import state from "./state";
// import { observer } from "./state";
import store from "./state";
//css
import "./index.css";

let reactDomRender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        myProfile={state.profileComponent.myProfile}
        profileBG={state.profileComponent.profileBG}
        myProfileLogic={state.profileComponent.myProfileLogic}
        myPosts={state.profileComponent.myPosts}
        friendsData={state.asideComponent.friendsData}
        dialogData={state.dialogComponent.dialogData}
        messagesData={state.dialogComponent.messagesData}
        addPost={store.addPost.bind(store)}
        onPostChange={state.addpostComponent}
        dialogsComponent={state.dialogComponent}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
//first render
reactDomRender(store.getState());
//rerender on change (function in state = reactDomRender)
store.observer(reactDomRender);

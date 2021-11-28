//render
import state from "./state";
import { listener } from "./state";
//Deps
import React from "react";
import ReactDOM from "react-dom";
//Apps
import App from "./components/App/App";
import { addPost } from "./state";
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
        addPost={addPost}
        onPostChange={state.addpostComponent}
        dialogsComponent={state.dialogComponent}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

reactDomRender(state);
//rerender on change
listener(reactDomRender);

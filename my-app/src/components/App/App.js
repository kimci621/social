//deps
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import MainContent from "../MainContent/MainContent";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Autorisation from "../Autorisation/Autorisation";
//css
import "./App.css";
import "../../css/my-fonts.css";

function App(props) {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className="container">
          <div className="content">
            <Aside friendsData={props.friendsData} />
            <Routes>
              <Route path="/" element={<News />}></Route>
              <Route
                path="profile"
                element={
                  <MainContent
                    addPost={props.addPost}
                    myPosts={props.myPosts}
                    myProfileLogic={props.myProfileLogic}
                    profileBG={props.profileBG}
                    myProfile={props.myProfile}
                    onPostChange={props.onPostChange}
                  />
                }
              ></Route>
              <Route
                path="messages"
                element={
                  <Dialogs
                    dialogData={props.dialogData}
                    messagesData={props.messagesData}
                    myProfile={props.myProfile}
                    dialogsComponent={props.dialogsComponent}
                  />
                }
              ></Route>
              <Route path="news" element={<News />}></Route>
              <Route path="music" element={<Music />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="autorisation" element={<Autorisation />}></Route>
            </Routes>
          </div>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

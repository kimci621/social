//libs
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Header from "../Header/Header";
import AsideContainer from "../Aside/AsideContainer";
import MainContentContainer from "../MainContent/MainContentContainer";
import Dialogs from "../Dialogs/Dialogs";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Autorisation from "../Autorisation/Autorisation";
import Footer from "../Footer/Footer";
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
            <AsideContainer />
            <Routes>
              <Route path="/" element={<News />}></Route>
              <Route path="profile" element={<MainContentContainer />}></Route>
              <Route
                path="/messages"
                element={
                  <Dialogs
                    state={props.state}
                    dispatch={props.dispatch}
                    dialogData={props.state.dialogComponent.dialogData}
                    messagesData={props.state.dialogComponent.messagesData}
                    myProfile={props.state.profileComponent.myProfile}
                    dialogsComponent={props.state.dialogComponent}
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
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
export default App;

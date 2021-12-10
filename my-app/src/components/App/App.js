//libs
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import Header from "../Header/Header";
import AsideContainer from "../Aside/AsideContainer";
import MainContentContainer from "../MainContent/MainContentContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import News from "../News/News";
import Music from "../Music/Music";
import Settings from "../Settings/Settings";
import Autorisation from "../Autorisation/Autorisation";
import Footer from "../Footer/Footer";
import FindUsersContainer from "../FindUsers/FindUsersContainer";
//css
import "./App.css";
import "../../css/my-fonts.css";
function App() {
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
              <Route path="messages" element={<DialogsContainer />}></Route>
              <Route path="news" element={<News />}></Route>
              <Route path="music" element={<Music />}></Route>
              <Route path="settings" element={<Settings />}></Route>
              <Route path="autorisation" element={<Autorisation />}></Route>
              <Route path="users" element={<FindUsersContainer />}></Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
export default App;

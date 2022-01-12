//libs
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import HeaderContainer from "../Header/HeaderContainer";
import AsideContainer from "../Aside/AsideContainer";
import ProfileContainer from "../Profile/ProfileContainer";
import DialogsContainer from "../Dialogs/DialogsContainer";
import News from "../News/News";
import CardProfile from "../Music/Music";
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
        <div className="container">
          <HeaderContainer />
          <div className="content">
            <AsideContainer />
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/messages/*" element={<DialogsContainer />} />
              <Route path="/news/*" element={<News />} />
              <Route path="/music/*" element={<CardProfile />} />
              <Route path="/settings/*" element={<Settings />} />
              <Route path="/login/*" element={<Autorisation />} />
              <Route path="/users/*" element={<FindUsersContainer />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}
export default App;

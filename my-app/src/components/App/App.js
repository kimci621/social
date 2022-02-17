//libs
import React, { Fragment, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
// const OtherComponent = React.lazy(() => import('./OtherComponent'));
import HeaderContainer from "../Header/HeaderContainer";
import AsideContainer from "../Aside/AsideContainer";
import Footer from "../Footer/Footer";
//css
import "./App.css";
import "../../css/my-fonts.css";
//lazy
const ProfileContainer = React.lazy(() =>
  import("../Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
  import("../Dialogs/DialogsContainer")
);
const Video = React.lazy(() =>
  import("../Video/VideoContainer")
);
const CardProfile = React.lazy(() =>
  import("../Music/Music")
);
const Settings = React.lazy(() =>
  import("../Settings/Settings")
);
const AuthContainer = React.lazy(() =>
  import("../Autorisation/AuthContainer")
);
const FindUsersContainer = React.lazy(() =>
  import("../FindUsers/FindUsersContainer")
);

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <div className="container">
          <HeaderContainer />
          <div className="content">
            <AsideContainer />
            <Routes>
              <Route path="/" element={
              <Suspense fallback={<div>Загрузка...</div>}><ProfileContainer /></Suspense>}/>
              <Route path="/profile/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><ProfileContainer /></Suspense>}/>
              <Route path="/messages/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><DialogsContainer /></Suspense>}/>
              <Route path="/video/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><Video /></Suspense>}/>
              <Route path="/music/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><CardProfile /></Suspense>}/>
              <Route path="/settings/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><Settings /></Suspense>}/>
              <Route path="/login/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><AuthContainer /></Suspense>}/>
              <Route path="/users/*" element={
              <Suspense fallback={<div>Загрузка...</div>}><FindUsersContainer /></Suspense>}/>
            </Routes>
          </div>
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

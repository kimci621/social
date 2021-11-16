import { Fragment } from "react";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import MainContent from "../MainContent/MainContent";
//css
import "./App.css";
import "../../css/my-fonts.css"

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="content">
          <Aside />
          <MainContent />
        </div>
      </div>
    </Fragment>
  );
}

export default App;

import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/wars.svg";
import { React } from "react";

const Header = (props) => {
  return (
    <>
      <nav>
        <Link to="/login/*"></Link>
      </nav>
      <header className="header">
        <NavLink to="/" className="header--logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <NavLink to="/login" className="header--leave-btn">
          {props.login ? props.login : "login"}
        </NavLink>
      </header>
    </>
  );
};

export default Header;

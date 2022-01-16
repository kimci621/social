import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/wars.svg";
import { React } from "react";

const Header = (props) => {
  const LoginBtn = () => {
    if (props.login === null) {
      return (
        <NavLink to="/login" className="header--leave-btn">
          Log in
        </NavLink>
      );
    } else {
      return (
        <button
          onClick={() => {
            props.thunkLogOut();
          }}
          className="headerBtn"
          type="submit"
        >
          Log out
        </button>
      );
    }
  };
  return (
    <>
      <nav>
        <Link to="/login/*"></Link>
      </nav>
      <header className="header">
        <NavLink to="/" className="header--logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <LoginBtn />
      </header>
    </>
  );
};

export default Header;

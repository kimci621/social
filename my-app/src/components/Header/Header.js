import { Link, NavLink} from "react-router-dom";
import { Fragment } from "react";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="autorisation"></Link>
      </nav>
      <header className="header">
        <a href="https://google.com" className="header--logo">
          <img src="./wars.svg" alt="wars" />
        </a>
        <NavLink to="/autorisation" className="header--leave-btn">
          leave
        </NavLink>
      </header>
    </>
  );
};

export default Header;

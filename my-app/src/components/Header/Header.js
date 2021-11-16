const Header = () => {
  return (
    <header className="header">
      <a href="https://google.com" className="header--logo">
        <img src="./wars.svg" alt="wars" />
      </a>
      <button type="submit" className="header--leave-btn">
        leave
      </button>
    </header>
  );
};

export default Header;

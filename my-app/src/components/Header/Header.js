const Header = () => {
  return (
    <header className="header">
      <div className="header--logo">
        <img src="./wars.svg" alt="wars" />
      </div>
      <button type="submit" className="header--leave-btn">
        leave
      </button>
    </header>
  );
};

export default Header;

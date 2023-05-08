import "../styles/Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        alt="headerImg"
        src="https://avatars.githubusercontent.com/u/108760076?v=4"
      />
    </div>
  );
}

export default Header
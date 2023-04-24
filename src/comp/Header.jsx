import "../styles/Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg" alt="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MEXpIf4RePnwSvZ4Cs-mRjD99b5hQbETVQ&usqp=CAU"
      />
    </div>
  );
}

export default Header
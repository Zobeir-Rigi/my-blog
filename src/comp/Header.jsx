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
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWop6j2kofPG26zjQo76ayK7o87kf6Y1Iy6w&usqp=CAU"
      />
    </div>
  );
}

export default Header
import "../styles/Home.css"
import Header from './Header'
import Posts from "./Posts";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default Home
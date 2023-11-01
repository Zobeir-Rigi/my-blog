import "../styles/Home.css"
import Header from './Header'
import Posts from "./Posts";
import SideBar from "./SideBar";

 export const Home = () => {
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


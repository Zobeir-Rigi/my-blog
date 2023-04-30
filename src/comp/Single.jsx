import "../styles/Single.css"
import SideBar from "./SideBar"
import SinglePost from "./SinglePost"
const Single = () => {
  return (
    <div className="single">
    <SinglePost />
    <SideBar />
    </div>
  )
}

export default Single
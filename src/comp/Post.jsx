import "../styles/Post.css"

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="
            https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MEXpIf4RePnwSvZ4Cs-mRjD99b5hQbETVQ&usqp=CAU"
        alt="postImg"
      />
      <div className="postInfo">
        <div className="postcats">
          <span className="postcat">Music</span>
          <span className="postcat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolo</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDiscription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        officia ab in? Ipsa suscipit perferendis quos tenetur sit ex assumenda
        eaque, repellat doloribus debitis tempore in veniam doloremque
        consequatur ullam! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi officia ab in? Ipsa suscipit perferendis quos tenetur
        sit ex assumenda eaque, repellat doloribus debitis tempore in veniam
        doloremque consequatur ullam! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi officia ab in? Ipsa suscipit perferendis
        quos tenetur sit ex assumenda eaque, repellat doloribus debitis tempore
        in veniam doloremque consequatur ullam! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi officia ab in? Ipsa suscipit
        perferendis quos tenetur sit ex assumenda eaque, repellat doloribus
        debitis tempore in veniam doloremque consequatur ullam! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Excepturi officia ab in?
        Ipsa suscipit perferendis quos tenetur sit ex assumenda eaque, repellat
        doloribus debitis tempore in veniam doloremque consequatur ullam! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Excepturi officia ab
        in? Ipsa suscipit perferendis quos tenetur sit ex assumenda eaque,
        repellat doloribus debitis tempore in veniam doloremque consequatur
        ullam!
      </p>
    </div>
  );
}

export default Post
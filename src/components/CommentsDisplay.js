import { useState } from "react";
import Comment from "./Comment";
import CommentsSearch from "./CommentsSearch"

function CommentsDisplay({ comments, display }) {
    const [commentsArr, setCommentsArr] = useState(comments)

    function removeComment(commentObj){
        const newComments = commentsArr.filter(comment => comment !== commentObj)
        setCommentsArr(newComments)
    }

    function submitSearch(text){
        const searchedComment = commentsArr.filter(comment => comment.user === text)
        setCommentsArr(searchedComment)
    }

  if (display === true) {
    return (
      <div>
        <CommentsSearch searchUser={submitSearch}/>
        <h1>{`${commentsArr.length} comments`}</h1>
        {commentsArr.map((commentObj) => (
          <Comment comment={commentObj} onDelete={removeComment} key={commentObj.id} />
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default CommentsDisplay;

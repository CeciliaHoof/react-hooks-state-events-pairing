import Votes from "./Votes"


function Comment({ comment, onDelete }){

    function removeComment(){
        onDelete(comment)
    }
    
    return(
        <div id={`comment-${comment.id}`}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            <Votes up={0} down={0}/>
            <button onClick={removeComment}>Remove Comment</button>
        </div>
    )
}

export default Comment
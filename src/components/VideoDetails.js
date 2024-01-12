
import Votes from './Votes'

function VideoDetails({ video, commentDis, clickHandler }){
    //will contain titles, views, thumbs buttons, hide comments button
    
    
    return(
        <div className="details">
            <h1>{video.title}</h1>
            <p>{`${video.views} views | Uploaded ${video.createdAt}`}</p>
            <Votes up={video.upvotes} down={video.downvotes}/>
            <br></br>
            <button id="hide" onClick={clickHandler}>{commentDis ? "Hide Comments" : "Show Comments"}</button>
        </div>
    )
}

export default VideoDetails
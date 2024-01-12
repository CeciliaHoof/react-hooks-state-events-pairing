import { useState } from 'react';
import video from "../data/video.js";
import VideoDetails from "./VideoDetails";
import CommentsDisplay from "./CommentsDisplay.js";

function App() {
  console.log("Here's your data:", video);
  const [toggleComment, setToggleComment] = useState(true)

  function commentToggler(){
    setToggleComment(!toggleComment)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails video={video} commentDis={toggleComment} clickHandler={commentToggler}/>
      <CommentsDisplay comments={video.comments} display={toggleComment}/> 
    </div>
  );
}

export default App;

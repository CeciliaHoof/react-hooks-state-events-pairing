import { useState } from "react";

function Votes({ up, down}){
    const [upVotes, setUpVotes] = useState(up)
    const [downVotes, setDownVotes] = useState(down)
    
    function upVote(){
        const newVotes = upVotes + 1;
        setUpVotes(newVotes)
    }

    function downVote(){
        const newVotes = downVotes + 1;
        setDownVotes(newVotes)
    }

    return(
        <div>
            <button id="upVotes" onClick={upVote}>{`${upVotes} 👍`}</button>
            <button id="downVotes" onClick={downVote}>{`${downVotes} 👎`}</button>
        </div>)
}

export default Votes
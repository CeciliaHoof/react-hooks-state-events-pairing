import { useState } from "react";

function CommentsSearch({ searchUser }){
    const [searchText, setSearchText] = useState("")

    function searchHandler(e){
        setSearchText(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        searchUser(searchText)
    }

    return(
        <form onSubmit={submitHandler}>
            <label>Search Comments</label>
            <input type="text" id="search" name="search" placeholder="user name" onChange={searchHandler}/>
            <input type="submit" value="submit"/>
        </form>
    )
}

export default CommentsSearch
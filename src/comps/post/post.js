import react, { useState } from 'react';
import reactDom from 'react-dom';
import Image from "../images/image"
import imageList from "../images/imagesList.json"
import User from "../user/user"
import "./post.css";
import Comments from "../comments/comment"
import Likes from "../likes/likes"
import Desc from "../desc/desc"

//import Button from '@mui/material/';


const Post = () => {
    const [hour, sethour] = useState(Date.now.toString())
    const [image, setimage] = useState(imageList.france)
    const [comments, setcomments] = useState(["nice pic"])
    const [likes, setlikes] = useState(0)
    const [desc, setdesc] = useState("")

    return (
        <div className="post">
            <User />
            <Image />
            <div className="stats">
                <Likes likescount={likes} changelike={setlikes} />
                <Desc />
            </div>
            <Comments />
        </div>

    )
}
export default Post;
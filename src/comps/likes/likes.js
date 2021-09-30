import react, { Component, useState } from 'react';
import reactDom from 'react-dom';
import "./likes.css"
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt';


const Likes = (props) => {
    const [isLiked, setIsLiked] = useState(false)
    const likefunc = () => {
        if (!isLiked) {
            props.changelike(props.likescount + 1);
            setIsLiked(true)
        }
        else {
            alert("you already liked this post")
        }
    }
    return (
        <div className="likes">
            <h2>Likes <ThumbUpAlt onClick={likefunc}></ThumbUpAlt> {props.likescount} </h2>

        </div>

    )
}
export default Likes;
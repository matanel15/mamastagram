import react from 'react';
import reactDom from 'react-dom';
import { useState } from 'react';
import imageList from "./imagesList.json";



const Image = () => {

    return (
        <div className="image">
            <img src={imageList.france} className="image"></img>
        </div>

    )
}
export default Image;
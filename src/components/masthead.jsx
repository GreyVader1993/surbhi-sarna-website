// Homepage Masthead Component for the website

import React from "react";
import MastheadImage from "../assets/images/home-masthead.jpg";

const Masthead = () => {
    return (
        <div 
            className="-mt-20 h-screen" 
            style={{ 
                backgroundImage: `url(${MastheadImage})`,
                backgroundSize: "cover", 
            }}>
                <p>Helloooo</p>
                <p>Hellooo</p>
        </div>
    )
}

export default Masthead;
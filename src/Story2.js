import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story2.css";
import Fade from "react-reveal/Fade";



function Story({ image, profileSrc, title }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }}
        className="story">
            <Fade left>
            <Avatar className="story__avatar" src={profileSrc} />
            </Fade>
            <h4>{title}</h4>
        </div>
    );
}

export default Story

import { Avatar } from "@material-ui/core";
import React, {useState} from "react"
import "./Story2.css";
import Fade from "react-reveal/Fade";
import HeadShake from 'react-reveal/HeadShake';

function Story({ image, profileSrc, title}) {

    const [body, setBody] = useState(true);
    

    return (
        <div style={{ backgroundImage: `url(${image})` }}
        className="story"
        onClick={(e)=>setBody(!body)}
        >
        {
            body?<>
                    <HeadShake>
                        <Avatar className="story__avatar" src={profileSrc} />
                    </HeadShake>
                    <h4>{title}</h4>
            </>:<>
                <HeadShake>              
                        <Avatar className="story__avatar" src={profileSrc} />
                    <h4>{title}</h4>
                </HeadShake>
            </>
        }
        </div>

    );
}

export default Story

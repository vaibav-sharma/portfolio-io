import React, {useState} from "react"
import Story2 from "./Story2";
import "./Reel2.css";
import Fade from "react-reveal/Fade";
import HeadShake from "react-reveal/HeadShake";
import Facebook from "./Facebook";
import { Route, Link } from "react-router-dom";
import PortFront from "./PortFront";


function Reel2({show, setShow}) {

  const [isHovering, setIsHovering] = useState(false);

   const handleToggle = (e) => {
    e.preventDefault();

    setIsHovering(!setIsHovering);
    console.log(setIsHovering)

  };
     
      return (
        <div className="reel2">
    
          <div className="facebook__app">
            <Fade left>  
              <Story2 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsVh_Cu55igPeR-ixQUV2VzvyWuZyYQhO3kziHt-251_FrrxHWvsDNLMa46IlpohY2FGc&usqp=CAU"
                profileSrc="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="App"
                setShow={setShow} show={show}
                />
            </Fade>
          </div>

          
        
          <Fade bottom>
          <Story2 
          image="https://i0.wp.com/www.innermedia.co.uk/wp-content/uploads/2019/01/shutterstock_1184512540-520x520.jpg"
          profileSrc="https://api.time.com/wp-content/uploads/2015/02/180490609.jpg"
          title="App"
          setShow={setShow} show={show}

          />    
          </Fade>

          <Fade top>
            <Story2 
            image="https://brandlogos.net/wp-content/uploads/2020/03/Netflix-logo-Symbol-512x512.png"
            profileSrc="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
            title="App"
            /> 
          </Fade>

         
          <Fade right>
            <Story2 
              image="https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg"
              profileSrc="https://api.time.com/wp-content/uploads/2015/02/180490609.jpg"
              title="App"
              onClick={()=>setShow(!show)}
              />
          </Fade>
        </div>


      );
    
}

export default Reel2

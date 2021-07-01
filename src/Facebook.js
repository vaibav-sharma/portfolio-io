import React from "react"
import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import Sidebar from "./Sidebar"
import "./Facebook.css"
import Fade from 'react-reveal/Fade';


function Facebook({show, setShow}) {
  return (
  <div className="app__info">  
    
    <Fade top>
    <div className="app__header">
      <Header setShow={setShow} show={show}/>
    </div>
    </Fade>

    <div className="app__body">
      <Fade>
      <Sidebar />
      </Fade>
      
      <Fade>
      <Feed setShow={setShow} show={show}/>
      </Fade>
    </div>
  </div>
    );
  }
export default Facebook;

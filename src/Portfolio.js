import React, {useState} from 'react'
import Typical from "react-typical"
import Header2 from "./Header2"
import "./Portfolio.css"
import Reel2 from "./Reel2"
import Fade from 'react-reveal/Fade';
import { Route, Link } from "react-router-dom"
import Facebook from "./Facebook"
import {Avatar, IconButton} from "@material-ui/core";





export default function Portfolio({show, setShow}) {

  return (
      <div class="page">
        <div class="header">
          <Header2 />
        </div>
        
        
        <div className="content__middle">
          <IconButton>
            <Fade>
            <Avatar className="avatar__details" 
            style={{ height: '150px', width: '150px' }}
            src={"https://i.pinimg.com/originals/1e/0e/8e/1e0e8eb4ee2d82681adaa4c61909ab4c.jpg"}/>
            </Fade>
          </IconButton>   
            <h2>Hi, I'm Vaibav, a ...
            {' '}
            <Typical
              loop={2}
              wrapper='b'
              steps={[
                'developer',
                1000,
                'designer',
                1000,
              ]}
              />
            </h2>
        </div> 
        <div className="reel_front">
        <Reel2 setShow={setShow} show={show}/>
        </div> 
      </div>    
  )
  
}



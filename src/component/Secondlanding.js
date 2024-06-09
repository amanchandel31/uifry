import React from 'react'
import start from "../images/Star 1.png"
import roundlines from "../images/Group 35887.png"
import firstm from "../images/iPhone-13-Pro-Front (1).png"
import grad from "../images/Group 35930.png"
import "./secondlanding.css"

import { PiStarFour ,PiSnowflake ,PiCubeTransparent } from "react-icons/pi";
const Secondlanding = () => {
  return (
    <div className='container-top'>
      <div className="flex-box">
        <div className="left">
            <img src={start} alt="" srcset="" />
            <img src={grad} alt="" srcset="" />
            <img src={roundlines} alt="" srcset="" />
            <img src={firstm} alt="" srcset="" />
        </div>
        <div className="right">
            <h3>FEATURES</h3>
            <h1>Uifry Premium</h1>
            <div className="quote">
                <h4><span><PiStarFour /></span>Budgeting Intervals</h4>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="quote">
                <h4><span><PiSnowflake /></span>Budgeting Intervals</h4>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="quote">
                <h4><span><PiCubeTransparent /></span>Budgeting Intervals</h4>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Secondlanding

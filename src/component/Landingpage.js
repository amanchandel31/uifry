import React from 'react'
import redgrad from "../images/Group 1000002356.png"
import "./Landingpage.css"
import { MdArrowRightAlt } from "react-icons/md"
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import roundlines from "../images/Group 35887.png"
import firstm from "../images/iPhone-13-Pro-Front (1).png"
import secondm from "../images/iPhone-13-Pro-Front.png"
import group32 from "../images/Group 35932.png"
import group24 from "../images/Group 35924.png"
import start from "../images/Star 1.png"

const Landingpage = () => {
  return (
    <div className='container-landing'>
        <div className="upperblock">
            <div className="upper-left">
                <div className="img-portion">
                    <img src={redgrad} alt="" srcset="" />
                </div>
                <div className="content">
                    <h1>Make THe Best <br /> Financial Decisions</h1>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br /> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                    <div className="button-holder">
                        <button>Get Started <span><MdArrowRightAlt /></span></button>
                        <button><span><MdOutlineSlowMotionVideo /></span>Watch Video</button>
                    </div>
                    <img className='star' src={start} alt="" srcset="" />
                    <img className='group24' src={group24} alt="" srcset="" />
                </div>
            </div>
            <div className="upper-right">
                <img src={start} alt="" />  
                <img src={roundlines} alt="" srcset="" />
                <img src={firstm} alt="" srcset="" />
                <img src={secondm} alt="" srcset="" />
                <img src={firstm} alt="" />
                <img src={group32} alt="" srcset="" />
                <img src={start} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default Landingpage

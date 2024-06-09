import React from 'react'
import start from "../images/Star 1.png"
import roundlines from "../images/Group 35887.png"
import firstm from "../images/iPhone-13-Pro-Front (1).png"
import grad from "../images/Group 35930.png"
import "./Fourthlandingpage.css"

function Fourthlandingpage() {
  return (
    <>
    <div className='Fourthlandingpage'>
      <div className="flex-box">
        <div className="left left2">
            <img src={start} alt="" srcset="" />
            <img src={grad} alt="" srcset="" />
            <img src={roundlines} alt="" srcset="" />
            <img src={firstm} alt="" srcset="" />
        </div>
        <div className="contant">
            <div className="stra_icon">
                <div className="circle">
            <i class="fa-regular fa-star"></i>
            </div>
               <h3>Fully Customizable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Error, tenetur quo illum deleniti provident totam mollitia <br /> at excepturi laboriosam quasi in sapiente ad, libero fugit <br /> laudantium repellat aperiam soluta? Amet veritatis laboriosam <br /> sequi nihil quaerat, molestias dolore soluta voluptatibus quo <br /> repellendus nesciunt ullam necessitatibus, impedit accusantium.</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fourthlandingpage
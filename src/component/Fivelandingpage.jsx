import React from 'react'
import "./fivelandingpage.css"
import Group from "../images/Group 1000002334.png"
import grad from "../images/Group 35930.png"


function Fivelandingpage() {
  return (
    <>
    <div className="five_section">
      <div className="contant_area">
        <p>testimonial</p>
        <h2>what our users <br /> say aboutUs?</h2>
      </div>
      <div className="flex-box">
        <div className="left">
            <img src={Group} alt="" className="group"/>
            <img src={grad} alt="" className="grad"/>
            </div>
        <div className="contant">
          <h3>the best financial accounting <br /> app ever!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Error, tenetur quo illum deleniti provident totam mollitia <br /> at excepturi laboriosam quasi in sapiente ad, libero fugit <br /> laudantium repellat aperiam soluta? Amet veritatis laboriosam <br /> sequi nihil quaerat, molestias dolore soluta voluptatibus quo <br /> repellendus nesciunt ullam necessitatibus, impedit accusantium.</p>
            <span>Nick Jones</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fivelandingpage
import React from 'react'
import "./Thirdlandingpage.css"
import start from "../images/Star 1.png"
import roundlines from "../images/Group 35887.png"
import firstm from "../images/iPhone-13-Pro-Front.png"
import grad from "../images/Group 35930.png"

function Thirdlandingpage() {
  return (
    <>
    <div className='container-top'>
      <div className="flex-box">
        <div className="lefted">
            <h3>ADVATNAGES</h3>
            <h1>Why Choose Uifry?</h1>
            <div className="bell_icon">
                <div className="circle">
            <i class="fa-solid fa-bell"></i>
            </div>
              <h4>Clever Notifications</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Officia ut distinctio id quo, vel ullam facere cum commodi hic <br /> saepe provident reprehenderit consectetur alias libero error <br /> cumque eligendi at deserunt odit dolor fuga magni, omnis <br /> repudiandae? Obcaecati quod at saepe!</p>
            
        </div>
        <div className="left">
            <img src={start} alt="" srcset="" className="start" />
            <img src={grad} alt="" srcset="" />
            <img src={roundlines} alt="" srcset="" />
            <img src={firstm} alt="" srcset="" />
        </div>
      </div>
    </div>
    </>

  )
}

export default Thirdlandingpage
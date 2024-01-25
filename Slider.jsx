import React from 'react'
import bg1 from "../assets/bg1.webp"
import { NavLink } from 'react-router-dom'
import "./Slider.css"




export const Slider = () => {
  return (
    <>
    <div className="home">
      <div className="home_content">
        <p >This is Me</p>
        <h1>Raju Singh</h1>
        <p>fgpfel;gefkgjeraf'dc.,lsdugvhefdpc.;sdkegifvldskgidjvsc,veofgrerq f-0rig</p>
      
      <button>
        <NavLink className="btn" to="/contact">Hire Me</NavLink>
      </button>
      </div>
      <div className="home-image">
          <img src={bg1} alt="bg" />
      
      </div>
    </div>

    </>

  )
}


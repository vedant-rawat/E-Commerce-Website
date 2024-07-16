import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css' 
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'


export const Hero = () => {
  return (
    <div className='container hero row m-auto mb-5'>
        <div className="hero-left col col-lg-6 col-md-8 col-sm-12">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>New</p>
                    <img src = {hand_icon} alt = "" width="105px"/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src = {arrow_icon} alt = ""/>
            </div>
        </div>
        <div className="hero-right col col-lg-6 col-md-4">
            <img src = {hero_image} alt = "" className=""/>
        </div> 
    </div>
  )
}

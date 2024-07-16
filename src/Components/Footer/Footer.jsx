import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import whatsapp from '../Assets/whatsapp_icon.png'
import insta from '../Assets/instagram_icon.png'
import pint from '../Assets/pintester_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src = {footer_logo} alt = ""/>
            <p>SHOPPER</p>
        </div>

        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
            <img src = {whatsapp} alt = ""/>
            <img src = {insta} alt = ""/>
            <img src = {pint} alt = ""/>
        </div>

        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

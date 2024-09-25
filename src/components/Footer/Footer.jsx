import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
const Footer = () => {
  return (
    
    <div className="footer" id='footer'>

        <div className="footer-content">

            <div className="footer-content-left">
                <img src={assets.logo} id = "picture"alt="" />
                <p>"Experience the fastest and most reliable food delivery with Grab - your go-to app for delicious meals delivered fresh and on time, every time."</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
               </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 7836573892</li>
                    <li>grab_contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            All trademarks are properties of their respective owners. 2008-2024 © Grab™ Ltd. All rights reserved.
        </p>
    </div>



  )
}

export default Footer
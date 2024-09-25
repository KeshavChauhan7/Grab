import React, { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const Loginpopup = ({setshowlogin}) => {

    const[currentstate,setcurrentstate] = useState("Sign Up")
  return (
    <div className='loginpopup'>
        <form  className="loginpopup-container">
            <div className="loginpopup-title">
                <h2>{currentstate}</h2>
                <img onClick={()=>setshowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="loginpopup-input">
              <input type="text"placeholder='Your Name' required/>
              <input type="email"placeholder='Your Email' required/>
              <input type="password"placeholder='Password' required/>
            </div>
            <button>{currentstate==='Sign Up'?"Create Account":"Login"}</button>
            <div className="loginpopup-condition">
              <input type="checkbox" required />
              <p>By continuing , I agree to the terms of use & privacy policy.</p>
            </div>
            {currentstate==="Login"?<p>Create a new account? <span onClick={()=>setcurrentstate("Sign Up")}>Click Here</span></p>
            : <p>Already have an account? <span onClick={()=>setcurrentstate("Login")}>Login Here</span></p>
          }
           
        </form>

    </div>
  )
}

export default Loginpopup
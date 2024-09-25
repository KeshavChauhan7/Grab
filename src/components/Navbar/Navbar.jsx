import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';
 import {Storecontext} from '../../Context/Storecontext';

const Navbar = ({setshowlogin}) => {

   const [menu,setMenu] = useState("Home");
   const {getamount} = useContext(Storecontext)

return (
    <div className='navbar'>
      <Link to='/'>
      <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#exp' onClick={()=>{setMenu("Menu")}} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>{setMenu("Mobile App")}} className={menu==="Mobile App"?"active":""}>Mobile App</a>
        <a href='#footer' onClick={()=>{setMenu("Contact Us")}} className={menu==="Contact Us"?"active":""}>Contact Us</a> 
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon"  />    
        <div className="navbar-search-icon">
         
         <Link to='/cart'>
          <img src={assets.basket_icon} alt="baslet" />
          </Link>
          
          <div className={getamount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>Sign In</button>
      </div>

    </div>
  )
}

export default Navbar
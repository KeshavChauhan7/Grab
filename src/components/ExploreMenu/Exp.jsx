import React from 'react'
import './Exp.css'
import {menu_list} from '../../assets/assets'
const Exp = ({category,setCategory}) => {
  return (
    <div className='exp' id='exp'>
        <h1>Explore our menu</h1>
        <p className='exp-text'>Indulge in our carefully curated menu featuring a diverse selection of mouth-watering dishes. From savory starters to decadent desserts, each item is crafted with premium ingredients and delivered piping hot to ensure a delightful dining experience at home.</p>
        <div className="exp-list">
            {/* render the menulist using map method */}
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name )}} key={index}className="exp-menu-list-item">
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exp
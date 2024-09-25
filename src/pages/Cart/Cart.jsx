import React, { useContext } from 'react'
import './Cart.css';
import { Storecontext } from '../../Context/Storecontext';
import {useNavigate} from 'react-router-dom';

const Cart = () => {

  const {cartItems,food_list, removefromcart,getamount} = useContext(Storecontext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Tile</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item,indec)=>{
            if(cartItems[item._id]>0){
              return (
                     <div>
                      <div className='cart-items-title cart-items-item'>
                        <img src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{cartItems[item._id]}</p>
                        <p>${item.price*cartItems[item._id]}</p>
                        <p onClick={()=>removefromcart(item._id)} className='cross'>x</p>
              </div>
              <hr />
              </div>

            )
            }
          })}
      </div>
       <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-deatils">
              <p>Subtotal</p>
              <p>${getamount()}</p>
            </div>
            <hr />
            <div className="cart-total-deatils">
              <p>Delivery Fee</p>
              <p>$   {getamount()===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-total-deatils">
              <b>Total Amount </b>
              <b>${getamount()===0?0:    getamount()+5}</b>
            </div>
            
          </div>
          <button onClick={()=>navigate('/order')}>Proceed to checkout</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a discount coupon , Have fun!!!</p>
            <div className="cart-promo-code-input">
              <input type="text" placeholder='Discount Coupon...' />
              <button>Submit</button>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Cart
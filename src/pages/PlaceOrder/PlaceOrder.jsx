import React, { useContext } from 'react'
import './Placeorder.css';
import { Storecontext } from '../../Context/Storecontext';


const PlaceOrder = () => {
  const {getamount} = useContext(Storecontext)
  return (
    <form className='place-order'>

    <div className="place-order-left">
      <p className='title'>Delivery Information</p>
      <div className="multi-field">
        <input type="text" placeholder='First Name' required/>
        <input type="text" placeholder='Last Name' required/>
      </div>
      <input type="email" placeholder='Email Address'required/>
      <input type="text" placeholder='Address' required/>
      <div className="multi-field">
        <input type="text" placeholder='City' required/>
        <input type="text" placeholder='State' required/>
      </div>
      <div className="multi-field">
        <input type="text" placeholder='Pin Code' required/>
        <input type="text" placeholder='Landmark'/>
      </div>
      <input type="text" placeholder='Phone' required/>
    </div>
    <div className="place-order-right">
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
              <b>${getamount()===0?0:getamount()+5}</b>
            </div>
            
          </div>
          <button>Proceed to Pay</button>
        </div>
    </div>

    </form>
  )
}

export default PlaceOrder
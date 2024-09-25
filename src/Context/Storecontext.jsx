import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";


export const Storecontext = createContext(null)

const Storecontextprovider = (props) =>{

const [cartItems,setCartItems] = useState({});

    const addtocart = (itemid) =>{

        if(!cartItems[itemid]){
            setCartItems((prev)=>({...prev,[itemid]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemid]:prev[itemid]+1}))
        }
    }

    const removefromcart = (itemid) =>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    }


   const getamount = ()=>{
    let totalamount =0;
    for(const item in cartItems){

        if(cartItems[item]>0){
            let iteminfo = food_list.find((product)=>product._id===item);

            totalamount += iteminfo.price * cartItems[item];
        }

       
    }
    return totalamount;

   }

    const contextvalue={
        food_list,
        cartItems,
        setCartItems,
        addtocart,
        removefromcart,
        getamount
    }

    return(
        <Storecontext.Provider value={contextvalue}>
            {props.children}
        </Storecontext.Provider>
    )
}

export default Storecontextprovider;
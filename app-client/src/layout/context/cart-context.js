import React, { useState } from 'react';
const cartObject = {
    userName:'?',
    email:'?@',
    token:'',
    cart:{
        numberOfItems:0,
        productsForBuy:[
            // {
            //     productId:0,
            //     productItemsForBuy:0,
            // }
        ],
        totalPrice:0,
    }
    

}

export const CartContext = React.createContext(cartObject)

const Cart= ({children})=>{
  const [cart,updateCart]= useState(cartObject)

    return (
        <CartContext.Provider value={[cart,updateCart]} >
            {children}
        </CartContext.Provider>
    )
}
export default Cart;
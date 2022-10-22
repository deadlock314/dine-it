import React from 'react';
import EmptyCart from './EmptyCart';
import CartWithFood from './CartWithFood';
import { useSelector } from 'react-redux';


const Cart=()=> {

   const cartData=useSelector(state=> state.cartData);
   return (
   <>
      {
      ( cartData.prevCartData.length<=0 )?<EmptyCart/> : <CartWithFood />
      }
   </>
   )
}
export default Cart;



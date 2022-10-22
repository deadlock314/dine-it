import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate } from 'react-router';
import { updateCartData, updatePrice } from '../../ReduxCode/Reducers';
import { priceAdder } from '../../HelperFun/priceAdder';

const CartButtons=({prop})=> {

    const redirect=useNavigate();

    console.log(prop);

    const cartData=useSelector(state=> state.cartData);


    const dispatch=useDispatch();


    const AddToCartHandler=(e)=>{

  

 const checkForDuplicate=()=>{
    console.log(cartData)
         for (let i = 0; i < cartData.prevCartData.length; i++)
           if(cartData.prevCartData[i].prop._id==prop._id){
           return false;
           } 
          return true;
    }


    if(checkForDuplicate)
    {
       dispatch(updateCartData({...prop}));
       dispatch(updatePrice({ totalPrice:priceAdder(cartData.totalPrice,prop.price,'add') ,countObj:{id:prop._id,count:1}}))
    }

redirect(`/cart`);
} 

    
    const BuyNowHandlerWithSingleP=(e)=>{
        redirect(`/buyingpage`)
    }

    return (  
        <div id='pinfo-btn'>
        <button className='FoodInfo-button' name={prop.FoodId} onClick={BuyNowHandlerWithSingleP} >Order Now</button>
        <button className='FoodInfo-button' name={prop.FoodId} onClick={AddToCartHandler}>Add to Cart</button>
        </div>
    );
}

export default CartButtons;
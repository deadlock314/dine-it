import React from 'react';
import { useNavigate } from 'react-router';
import { getStorage } from '../../HelperFun/browserStorageFuns';
import '../../Styles/CartStyles/CartPS.css';


const CartFoodStruct=(prop)=> {
    
    const redirect=useNavigate();

    const clickFoodStructHandler=e=>  redirect(`/fooditem/${prop.props._id}`,{state:prop.props})

    return ( 
       
        <div >
   
            <div className="cart-Food-struct" key={prop.props._id} onClick={clickFoodStructHandler}>
               <img id='cart-Food-image' src={prop.props.foodimgLink[0]} name={prop.props.FoodId} alt={prop.props.name}/>
               <div id='cart-container'>
               <p id='cart-Food-des'>   {prop.props.name}</p>
               <p id="cart-Food-price"> {prop.props.price}</p>
               </div>
            </div>
      
        
        </div>
     );
}

export default CartFoodStruct;
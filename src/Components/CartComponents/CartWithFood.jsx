import React from 'react';
import CartFoodStruct from './CartFoodStruct';
import FoodCounter from './FoodCount';
import '../../Styles/CartStyles/CartPS.css';
import { useDispatch, useSelector } from 'react-redux';
import { updatePrice, removeCartData } from '../../ReduxCode/Reducers';
import PriceCalc from './PriceCalc';
import { priceAdder } from '../../HelperFun/priceAdder';

const CartWithFood = () => {

  const cartData = useSelector((state) => state.cartData);

  console.log(cartData);

  const cartState=cartData.prevCartData|| [];

  const dispatch = useDispatch();

  const CartDelClickHandler = (e) => {
    e.preventDefault();

    const id = e.target.name;
    dispatch(removeCartData(_id));
    dispatch(updatePrice({
      countObj: { _id, count: 1 },
      totalPrice: priceAdder(cartData.totalPrice, e.target.className, 'sub', cartData.countObj[_id] || 1)
    }))

  };


  return (
    <>
      {
        cartState.map((cartFood) => {
          return (
             
              (cartFood) ?
                <div id='main-cart-component'>
                  <CartFoodStruct props={cartFood} />
                  <FoodCounter props={cartFood} />
                  <button id='cart-del-btn' className={cartFood.price} name={cartFood._id} onClick={CartDelClickHandler}>Remove</button>
                </div>
                : <></>
              
          )
        })
      }
      <PriceCalc />
            
           
    </>
  );
}

export default CartWithFood;
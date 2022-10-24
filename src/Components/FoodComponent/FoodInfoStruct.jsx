import React from 'react';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import CartButtons from './CartButtons';
import foodStore from '../../DummyData/dummyData';
import { redirect } from 'react-router-dom';

const PropsInfoStruct = () => {

   const FoodInfoProps = foodStore[0];
   console.log(foodStore[0])



   return (
     
        
               FoodInfoProps.foods.map((props) => {

                  return (
                     
                        <div className='food-card' key={props._id}  onClick={() => { redirect(`/fooditem/${prop._id}`) }}>
                           <img className='dish-img' src={props.foodimgLink} name={props._id} alt={props.name} />
                           <div className='container2'>
                              <p className='dish-name'>{props.name}</p>
                              <p className='dish-price'> {props.price}</p>
                              <p className='dish-price'> {props.caterogry}</p>
                              <p className='dish-price'> {props.tag}</p>
                           </div>
                           <CartButtons prop={props} />

                        </div>
                   
                  )

               })
          

   );
}

export default PropsInfoStruct;
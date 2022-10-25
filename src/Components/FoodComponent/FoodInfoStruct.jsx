import React from 'react';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import CartButtons from './CartButtons';
import foodStore from '../../DummyData/dummyData';
import {useNavigate } from 'react-router';


const PropsInfoStruct = () => {

   const FoodInfoProps = foodStore[0];
   const redirect=useNavigate();


   return (
     
        
               <div className="food-list-container">
                  {
                              FoodInfoProps.foods.map((props) => {

                                 return (
                                    
                                       <div className='food-card' key={props._id} >
                                          <img className='dish-img' src={props.foodimgLink[0]}  onClick={() => redirect(`/fooditem/${props._id}`,{state:props})} name={props._id} alt={props.name} />
                                          <div className='container2' onClick={() => { redirect(`/fooditem/${props._id}`,{state:props}) }}>
                                             <p className='dish-name'>{props.name}</p>
                                             <p className='dish-price'> {props.price}</p>
                                             <p className='dish-price'> {props.caterogry}</p>
                                             <p className='dish-price'> {props.tag}</p>
                                          </div>
                                          <CartButtons prop={props} />
                                 
                                       </div>
                                  
                                 )
                                 
                                 })
                  }
         
               </div>
          

   );
}

export default PropsInfoStruct;
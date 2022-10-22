import React from 'react';
import Ratings from './Ratings';
import { useSelector } from 'react-redux';
import Spinner from '../unitComponent/Spinner';
import CartButtons from './CartButtons';
import foodStore from '../../DummyData/dummyData';
import hotelimg from '../assets/767252.jpg'
import { redirect } from 'react-router-dom';

const PropsInfoStruct = () => {

   const FoodInfoProps = foodStore[0];
   console.log(foodStore[0])



   return (
      <>
      
             <div key={FoodInfoProps._id} >
              
                  <img className='hotel-bg-img'src={hotelimg} alt={FoodInfoProps.name} />

                  <div className='options-card'>
                     <a href="#menu">Menu</a>
                     <a href="">About Us</a>
                     <a href="">Contact Us</a>
                  </div>
                  <div className='bg-img-div'>
                     <p className='hotel-name'>Dream Point hotel & restaurant.</p>    
                  </div>
                  
               </div>
            
              <div className="maincard" id='menu'>
              {
                  FoodInfoProps.foods.map((props)=>{

                     return(
                           <div key={props._id}  >
                    <div className='card2' onClick={()=>{redirect('/fooditem')}}>
                    <img className='dish-img'src={props.foodimgLink} name={props._id} alt={props.name} />
                        <div className='container2'>
                           <p className='dish-name'>{props.name}</p>    
                           <p className='dish-price'> {props.price}</p>
                           <p className='dish-price'> {props.caterogry}</p>
                           <p className='dish-price'> {props.tag}</p>
                        </div>
                   <CartButtons prop={props}/>
                  
                </div>
            </div>
                     )
            
            })
               }
              </div>
               

           
         
      </>
   );
}

export default PropsInfoStruct;
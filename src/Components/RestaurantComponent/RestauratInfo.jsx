import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import FoodInfoStruct from '../FoodComponent/FoodInfoStruct';
import '../../Styles/FoodInfoStyles/restaurantInfoStyles.css';
// import { getStorage } from '../../HelperFun/browserStorageFuns';
// import { getFoodInfoData } from '../../HelperFun/getFoodData';
import hotelimg from '../assets/pexels-ella-olsson-1640777.jpg';
import foodStore from '../../DummyData/dummyData';



const RestaurantInfo = () => {

   const param = useParams();

   const { state } = useLocation();

   const [loading, setLoading] = useState(true);

   const FoodInfoProps = foodStore[0];

   // useEffect(() => {
   // getFoodInfoData(state.FoodId).then(
   //    (res) => {
   //    console.log(res);
   //    setExdes(res)
   //    setLoading(false)
   // }

   //    )
   // }, []);

   return (
      <>

         <div >

            <img className='hotel-bg-img' src={hotelimg} alt={FoodInfoProps.name} />

            <div className='options-card'>
               <a href="#menu">Menu</a>
               <a href="">About Us</a>
               <a href="">Contact Us</a>
            </div>

            <div className='bg-img-div'>
               <p className='hotel-name'>Dream Point hotel & restaurant.</p>
            </div>

         </div>
         <div className="food-data-list">
            <p className="food-list-title">Dishes Avaliable Here..</p>
            <FoodInfoStruct />
         </div>
         
      </>


   );
}

export default RestaurantInfo;
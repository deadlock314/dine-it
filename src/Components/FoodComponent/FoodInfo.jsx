import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import FoodInfoStruct from './FoodInfoStruct';
import '../../Styles/FoodInfoStyles/FoodInfoStyles.css';
import { getStorage } from '../../HelperFun/browserStorageFuns';
import { getFoodInfoData } from '../../HelperFun/getFoodData';

const FoodInfo = () => {

   const param = useParams();

   const { state } = useLocation();

   const [loading, setLoading] = useState(true);

   const [exdes, setExdes] = useState({});

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

            <FoodInfoStruct />

   );
}

export default FoodInfo;
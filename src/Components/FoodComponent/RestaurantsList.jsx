import React,{ useEffect,useState} from 'react';
import RestaurantCard from './RestaurantsCard';
import '../../Styles/FoodInfoStyles/foodStructStyles.css';
import { useParams } from 'react-router';
import Spinner from '../unitComponent/Spinner';
import {  getStorage, setStorage } from '../../HelperFun/browserStorageFuns';
import foodstore from '../../DummyData/dummyData';

const ResturantsList=()=> {

    const params=useParams();

    const [RestaurantList,setRestaurantList]=useState([{}]);
    const [loading ,setLoading]=useState(true);

    useEffect(()=>
    {
        const FetchData=async()=>{
            if(getStorage("homeFoods"))
                setRestaurantList(JSON.parse(getStorage("homeFoods")))
            else{
             const res= foodstore;
             
               setRestaurantList(res)
               setStorage("homeFoods",JSON.stringify(res));
            }
        setLoading(false);
        
    }
       FetchData();
   
    },[params.FoodName]);


    return ( 
        <>
        {
            loading ? <Spinner/> :
                
                <div className='Food-container'>
                    {
                        RestaurantList.map((p)=>{
                            return(
                                <RestaurantCard props={p} key={p._id} />
                            )
                        })
                    } 
                </div>
           
        }
        </>
     );
}

export default ResturantsList;
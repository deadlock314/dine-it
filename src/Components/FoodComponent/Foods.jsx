import React,{ useEffect,useState} from 'react';
import FoodStruct from './FoodStruct';
import '../../Styles/FoodInfoStyles/foodStructStyles.css';
import { useParams } from 'react-router';
import {getFoodListData}  from '../../HelperFun/getFoodData';
import Spinner from '../unitComponent/Spinner';
import {  getStorage, setStorage } from '../../HelperFun/browserStorageFuns';
import foodstore from '../../DummyData/dummyData';

const Foods=()=> {

    const params=useParams();

    const [FoodList,setFoodList]=useState([{}]);
    const [loading ,setLoading]=useState(true);

    useEffect(()=>
    {
        const FetchData=async()=>{
            if(getStorage("homeFoods"))
                setFoodList(JSON.parse(getStorage("homeFoods")))
            else{
             const res= foodstore;
             
             //await getFoodListData(`https://${FoodType}`)
               setFoodList(res)
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
                        FoodList.map((p)=>{
                            return(
                                <FoodStruct props={p} key={p._id} />
                            )
                        })
                    } 
                </div>
           
        }
        </>
     );
}

export default Foods;
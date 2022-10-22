import axios from 'axios';

const getFoodInfoData=async(FoodType,id)=>{
  try{
      const exdesObj=await axios.get(`${FoodType}/${id}`,{withCredentials: true
    });
      return {...exdesObj.data.extendedDes}
  }
  catch{
    return({})
  }
}

const getFoodListData=async(url)=>{
 
  
  try{
      const FoodList=await axios.get(url,{withCredentials: true
      });
     
      return FoodList.data;
  }
  catch{
    return([])
  }
}
export { getFoodInfoData,getFoodListData};
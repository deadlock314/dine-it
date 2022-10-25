import React from 'react';
import '../../Styles/homePageStyles.css';
import  'font-awesome/css/font-awesome.min.css';
import ResturantsList from '../RestaurantComponent/RestaurantsList';


const HomePage=()=>{
  
    return(
    <>
        <div id="abc">
            <div className='container'>
                <h1 className='head-main'>DINE</h1>
                <h1 className='head-main'>IT</h1>
                <p className='para-main'>Delicious Food for Every Mood.</p>
                <div className='form-div'>
                        <input placeholder='Search Restraunts' />
                        <button className='btn search'>SEARCH</button>
                </div>
                <div className='form-div2'>
                        <input placeholder='Search Your fav foodss' />
                        <button className='btn search'>SEARCH</button>
                </div>
            </div>
        </div>
       <div className="homepage-reslist">
        <p className="homepage-res-title">Famous Restaurants Near you..</p>  
       </div>
       <ResturantsList/>
    </>
        )
}
 
export default HomePage;
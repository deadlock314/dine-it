import React from 'react';
import '../../Styles/homePageStyles.css';
import  'font-awesome/css/font-awesome.min.css';


const NavBar=()=>{
  
    return(
    <header>
        <div id="abc">
            <div className='container'>
                <h1 className='head-main'>DINE</h1>
                <h1 className='head-main'>IT</h1>
                <p className='para-main'>Delicious Food for Every Mood.</p>
                <div className='form-div'>
                        <input placeholder='Search Restraunts' />
                        <button className='btn search'>SEARCH</button>
                </div>
            </div>
        </div>
    </header>
        )
}
 
export default NavBar;
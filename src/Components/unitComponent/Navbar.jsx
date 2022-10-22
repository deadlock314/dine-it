import React from 'react';
import '../../Styles/navbarStyles.css';
import { Link} from 'react-router-dom';


export default function Navbar() {
  return (
      <div className='navbar'>
     
        <Link to="/" > <div>Home  </div> </Link>
     
     

        <Link to="/restaurant" > <div>Restraunts </div></Link>
       
      
     

       <Link to="/login" > <div> LogIn </div></Link>
      
     

       <Link to="/signup" > <div> SignUp </div></Link>
      
      </div>
    
  )
}

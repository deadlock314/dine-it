import React from 'react';
import '../../Styles/navbarStyles.css';
import { Link} from 'react-router-dom';
import  'font-awesome/css/font-awesome.min.css';


export default function Navbar() {
  return (
      <div className='navbar'>
     
        <Link to="/" > <div>Home  </div> </Link>
        <Link to="/restaurant" > <div>Restraunts </div></Link>

       <Link to="/login" > <div> LogIn </div></Link>
      <Link to="/signup" > <div> SignUp </div></Link>
        <Link to="/cart">  <i className="fa fa-shopping-bag" ></i>    </Link>

      
      </div>
    
  )
}

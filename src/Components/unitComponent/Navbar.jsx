import React from 'react';
import '../../Styles/navbarStyles.css';
import { Link} from 'react-router-dom';
import  'font-awesome/css/font-awesome.min.css';


export default function Navbar() {
  return (
      <div className='navbar'>
        
        <Link to="/" > <div className="company-name">Dint-it  </div> </Link>
        <Link to="/restaurant" > <div className="nav-links">Restraunts </div></Link>
       <Link to="/login" > <div className="nav-links"> LogIn </div></Link>
      <Link to="/signup" > <div className="nav-links"> SignUp </div></Link>
        <Link to="/cart"> <div className="nav-link nav-bag">< i className="fa fa-shopping-bag" ></i></div> </Link>

      
      </div>
    
  )
}

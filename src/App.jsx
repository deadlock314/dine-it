import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './Components/unitComponent/HomePage';
import LogIn from './Components/authComponent/LogIn';
import SignUp from './Components/authComponent/SignUp'
import RestaurantInfo from './Components/FoodComponent/RestauratInfo';
import ResturantsList from './Components/FoodComponent/RestaurantsList';
import Cart from './Components/CartComponents/Cart';
import UserProfile from "./Components/ProfileComponent/UserProfile";
import Footer from './Components/unitComponent/Footer';
import './Styles/globalStyles.css';
import AuthOtp from './Components/authComponent/AuthOtp';
import { setStorage } from './HelperFun/browserStorageFuns';
import BuyingPage from './Components/BuyingPageComponent/BuyingPage';
import Navbar from './Components/unitComponent/Navbar';



const App=()=> {

  
  return (

<div>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<NavBar/>}/>
 <Route path='/restaurant' element={<ResturantsList/>}/>
 <Route path='/login' element={<LogIn/>} />
 <Route path='/signup' element={<SignUp/>} />
 <Route path='/signup/alphakey' element={<AuthOtp/>} />
 <Route path='/cart/:FoodType/:FoodId' element={<Cart/>}/>
 <Route path='/cart' element={<Cart/>}/>
 <Route path='FoodInfo/:FoodId' element={<RestaurantInfo/>}/>
 <Route path='/buyingpage' element={<BuyingPage/>}/>
 <Route path='user/:userId' element={<UserProfile/>}/>
</Routes>
 <Footer/>
 </BrowserRouter>
</div>

 

  )
   
};




export default App;

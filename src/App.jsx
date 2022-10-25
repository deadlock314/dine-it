import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import NavBar from './Components/unitComponent/HomePage';
import LogIn from './Components/authComponent/LogIn';
import SignUp from './Components/authComponent/SignUp'
import RestaurantInfo from './Components/RestaurantComponent/RestauratInfo';
import Cart from './Components/CartComponents/Cart';
import UserProfile from "./Components/ProfileComponent/UserProfile";
import Footer from './Components/unitComponent/Footer';
import './Styles/globalStyles.css';
import AuthOtp from './Components/authComponent/AuthOtp';
import { setStorage } from './HelperFun/browserStorageFuns';
import BuyingPage from './Components/BuyingPageComponent/BuyingPage';
import Navbar from './Components/unitComponent/Navbar';
import FoodItem from './Components/FoodComponent/FoodItem';
import ResListWithSearch from './Components/RestaurantComponent/ResListWithSearch';



const App=()=> {

  
  return (

<div>
<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<NavBar/>}/>

 <Route path='/restaurant' element={<ResListWithSearch/>}/> 
 <Route path='FoodInfo/:FoodId' element={<RestaurantInfo/>}/>

 <Route path='fooditem/:food_id' element={<FoodItem/>}/>

 <Route path='/cart/:FoodType/:FoodId' element={<Cart/>}/>
 <Route path='/cart' element={<Cart/>}/>

 <Route path='/buyingpage' element={<BuyingPage/>}/>

 <Route path='/login' element={<LogIn/>} />
 <Route path='/signup' element={<SignUp/>} />
 <Route path='/signup/alphakey' element={<AuthOtp/>} />
 <Route path='user/:userId' element={<UserProfile/>}/>

</Routes>
 <Footer/>
 </BrowserRouter>
</div>

 

  )
   
};




export default App;

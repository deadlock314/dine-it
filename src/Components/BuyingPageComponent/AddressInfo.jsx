import axios from 'axios';
import React ,{ useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../unitComponent/Spinner';

 const AddressInfo=()=> {

    const redirect = useNavigate();
    const [loading,setLoading]=useState(false);

    const dispatch=useDispatch();

    let [user ,setUser] = useState({email:'' ,password:''});
        const changeHandler =e=>{
            const {name , value}=e.target;
            setUser((user) =>({ ...user,  [name]: value   }));
        };
        
        const loginResHandler=(res)=>{

            if(res.isUserLoggedIn && res.isCorrectPassword){
                alert('user succesfully Logged-In') 
                setLoading(true)
                setUser ({email:'' ,password:''})
                axios.get(`https://user/${res.data.id}`,{withCredentials: true
                }).then((userdata)=>{
                        if(userdata.data){
                            dispatch(changeUserAuth(true))
                            dispatch(setUserData(userdata.data)) 
                            redirect(`/user/${userdata.data.userAccData._Id}`);
                       }
                    })
            }
            else if(!res.isCorrectPassword && !res.isCorrectUser)
               setLoggedInMes('Enter correct email and password');
            else if( !res.isUserLoggedIn && !res.isCorrectPassword)
               setLoggedInMes('Please enter correct password')
            else
               setLoggedInMes('Something went wrong try again');

        }
    
        const clickHandler = async(e)=>{
            e.preventDefault();
            try{
                const response= await axios.post('/login',user,{withCredentials: true})
                loginResHandler(response.data)
            }
            catch(err){
                setLoggedInMes('Something went wrong try again');
            }
        }


    
        return (
            <>
            {
                (loading)?<Spinner/>:
                <div className='wrapper3'>
                 <form className="form2">
                 <label htmlFor="email" >Name  : </label>
                <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  
                <label htmlFor="email" >Mobile  : </label>
                <input type="email" name="email" id='email' value={user.email} onChange={changeHandler}/>  
                <label htmlFor="password" > Country : </label>
                <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/>
                <label htmlFor="password" > State : </label>
                <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/>
                <label htmlFor="password" > City : </label>
                <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/>
                <label htmlFor="password" > LandMark and other info : </label>
                <input type='password' name="password" id='password' value={user.password}  onChange={changeHandler}/>
                <button type='submit' onClick={clickHandler}>Submit</button>
            </form>
            </div>
            }
            </>
           
           
        );  
 }
 
 export default AddressInfo;
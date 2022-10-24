import React from 'react';
import '../../Styles/FoodInfoStyles/FoodStyles.css';
import { useNavigate } from 'react-router';
import {  getStorage } from '../../HelperFun/browserStorageFuns';


function FoodItem({ props }) {

    
    

    return (
        <>

            <div className='card' id={`Food-struct`} key={props._id} >
                <img className='Food-image' src={props.imgLink} name={props._id} alt={props.name} />
                <div className='container'>
                    <p id="Food-price">{props.name}</p>    
                    <p id='Food-des'> {props.quizes}</p>
                </div>

            </div>

        </>

    );

}

export default FoodItem;
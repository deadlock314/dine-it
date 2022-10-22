import React from 'react';
import '../../Styles/FoodInfoStyles/foodStructStyles.css';
import { useNavigate } from 'react-router';
import {  getStorage } from '../../HelperFun/browserStorageFuns';


function FoodStruct({ props }) {

    const redirect = useNavigate();
    
    const FoodInfoFetch = (e) => {
        (typeof (e.target.name) == undefined || e.target.name == undefined) ?
            redirect('/') : redirect(`/FoodInfo/${e.target.name}`, { state: props })

    }

    return (
        <>


            <div className='Resturant-card' key={props._id} onClick={FoodInfoFetch} >
           
                <div className='Resturant-image' style={{"backgroundImage":`url(${props.imgLink})`}} name={props._id} alt={props.name} />
                <div className='details-container'>
                    <p id="Food-price">{props.name}</p>    
                    <p id='Food-des'> {props.quizes}</p>
                </div>

            </div>

        </>

    );

}

export default FoodStruct;
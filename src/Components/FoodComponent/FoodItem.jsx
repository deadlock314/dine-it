import React from 'react';
import '../../Styles/FoodInfoStyles/foodInfoStyles.css';
import { useLocation, useNavigate } from 'react-router';
import CartButtons from './CartButtons';

function FoodItem() {

    const props=useLocation().state;

    return (
        <>

            <div className='food-info-main' key={props._id} >
                <div className="food-info-img-main-div">
                    <img className='food-info-img1' src={props.foodimgLink[0]} name={props._id} alt={props.name} />
                    <div className="food-info-img-div">
                    <img className='food-info-img2' src={props.foodimgLink[1]} name={props._id} alt={props.name} />
                    <img className='food-info-img2' src={props.foodimgLink[2]} name={props._id} alt={props.name} />
                    <img className='food-info-img2' src={props.foodimgLink[1]} name={props._id} alt={props.name} />
                    <img className='food-info-img2' src={props.foodimgLink[2]} name={props._id} alt={props.name} />
                    </div>
                </div>
                
                <div className='container'>
                    <p id="Food-price">{props.name}</p>
                    <p id="Food-price">{props.price}</p>      
                    <p id='Food-des'> {props.quizes}</p>
                    <p>{props.caterogry}</p>
                </div>

                <div className="food-info-cart-btn"> <CartButtons prop={props} /> </div>

            </div>

        </>

    );

}

export default FoodItem;
import React from 'react';
import AddressInfo from './AddressInfo';
import PaymentInfo from './PaymentInfo';
import '../../Styles/FormStyles.css';

function BuyingPage() {
    return ( 
    <>
    <div className='wrapper2'>
    <p className='buy-title'>Address Details</p>
    <AddressInfo/>
    </div>
    
    <div className='wrapper2'>
    <p className='buy-title'>Payment Details</p>
    <PaymentInfo/>
    </div>

    <div className='wrapper2'>
    <button id='order'>Order</button>
           
    </div>
    </>

     );
}


export default BuyingPage;
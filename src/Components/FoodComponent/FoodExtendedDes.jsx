import React from 'react';
import '../../Styles/FoodInfoStyles/ExdesStyles.css';

const FoodExtendedDes=(props)=> {
console.log(props) 

  if(props.exdes){
    let ExDes=[];
    ExDes=props.exdes;
 
    let keys=[];
    keys=Object.keys(ExDes)
    
     return ( 
         <>
          <p id='FoodInfo-maintitle'>Food Specifications</p>
        {
            keys.map((key)=>{
             return(
                 <div key={Math.random()}>
                  <p id='specification-subheading'  > {key} </p>
                 <hr/>
                 <div>
               {
                ExDes[key].map((param)=>{
                       const paramKey=[Object.keys(param)[0]];
                       return(
                         <div id='specification-obj' key={Math.random()} >
                          <p className='specification-val'>  { paramKey }  </p>
                           
                             
                             <p className='specification-val'>{param[paramKey]}</p>
                         </div>
       
                       );
                     
                     }) }
                 </div>
                 </div>
               
 
             )
 
            })
       } 
         </>
      );
  }
  else  return <> </>
  
   
}

export default FoodExtendedDes;
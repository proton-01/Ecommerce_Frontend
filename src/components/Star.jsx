import React from 'react'
import {FaStar , FaStarHalfAlt} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";

// let stars=3.5;
function Star({stars}) {

    const ratingStar = Array.from( {length : 5}, (elem,index)=>{

       let number = index +0.5;
    
     return <span key = {index}>
             {
               stars >= index+1 ? <FaStar/> : stars >= number  ? <FaStarHalfAlt/> : <AiOutlineStar/>
            
             }
      
           </span>
     });

  return (
    <div className='icon-style'>
        <div> {ratingStar}</div>
        
    </div>
  )
}

export default Star
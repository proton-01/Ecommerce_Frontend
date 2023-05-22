import {React, useState} from "react";
import "../style/item.css";

import { Link } from "react-router-dom";
import { addToCart } from "../redux/cart/cartActions";
import {useSelector , useDispatch} from "react-redux"


export default function Item({item}) {

    const dispatch = useDispatch();
    const [btnText ,setBtnText] = useState("Add To Cart");

    

    return (
        <div className="item_container">
            
            <div className="img_cont">
                
                {/* <img src={item.img}></img> */}
                <Link to={`/item/${item.id}`}> <img  src={item.img} alt="img"></img> </Link>
              
                  
                <button className="add_to_cart_btn" onClick={()=> { setBtnText("Item Added To Cart");dispatch(addToCart(item));}}> {btnText}</button>  
                <button className="like_btn"> <img src="images/like.png" alt="like"/></button>
                <button className="quick_btn"><Link to={`/item/${item.id}`}> <img src="images/preview.png" alt="pre" /> </Link></button> 
            </div> 

            <div className="text_cont">
               <h5>{item.title}</h5>
               <p>{item.p1}</p>
               <h4>${item.p2}</h4>
            </div>

        </div>
    )
  };
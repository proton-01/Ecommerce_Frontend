import { React, useState } from "react";
import "../style/shopitem.css";

import { addToCart } from "../redux/cart/cartActions";
import { useDispatch, useSelector } from "react-redux";
import {Link }from "react-router-dom";


export default function ShopItem({ item }) {

  const dispatch = useDispatch();
  const [btnText, setBtnText] = useState("Add To Cart");

 

  return (
    <div className="shop_item_container">
      <div className="shop_img_cont">

          <Link to={`/item/${item.id}`}> <img  className="shop_img_cont_img" src={item.img} alt="img"></img> </Link>
        
        <button
          className="shop_add_to_cart_btn"
          onClick={() => { setBtnText("Item Added To Cart");
                           dispatch(addToCart(item));
           }} > {btnText} </button>

        <button className="shop_like_btn">
          <img src="images/like.png" alt="like" />
        </button>

        <button className="shop_quick_btn">
        <Link to={`/item/${item.id}`}> <img src="images/preview.png" alt="pre" /> </Link>
          
        </button>
      </div>

      <div className="shop_text_cont">
        <h5>{item.title}</h5>
        <p>{item.p1}</p>
        <h4>${item.p2}</h4>
      </div>
    </div>
  );
}

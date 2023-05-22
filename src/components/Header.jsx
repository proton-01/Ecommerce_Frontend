import React from "react";
import "../style/header.css";
import { Link } from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";

import logo from "../img/logo.png";
import cart from "../img/cart.png";
import like from "../img/like.png";


function Header() {

    const dispatch = useDispatch();

    const numberCarts = useSelector(state => state.cart.numberCarts);
    const nowUser = useSelector(state=>state.auth.users);
    const loggedInUser = useSelector(state=>state.auth.loggedInUser);
    let name = sessionStorage.getItem('userNow')
   
    const logout = ()=>{

      console.log("logout fireeddd!!!");
      console.log(loggedInUser);

      return (
        dispatch({
          type:"LOGOUT",
          
        })
      )
     }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-logo"
          src={logo}
          alt="logo"
        />
      </Link>

      
      <div className="header-nav">
        
        <div className="header-option">
          <Link to="/">
            <p>HOME</p>
           </Link>
        </div>
        <div className="header-option">
          <Link to="/shop">
            <p>SHOP</p>
           </Link>
        </div>
        <div className="header-option">
          <Link to="/cart">
            <p>CART</p>
           </Link>
        </div>

        
        {/* {(nowUser[0]?.username) && <div className="header-option">{nowUser[0]?.username }</div>} */}
        <div className="header-option">  { loggedInUser ? <div className="username" >{name}</div> : <div> </div>} </div>
       
       

        <div className="header-option">
          {console.log(loggedInUser)}
          {
            
            loggedInUser ?
            <div className="header-option"> <button className="header_btn" onClick={logout}>logout</button>  </div>
            :
            <div className="header-option"><Link to="/login"> <button className="header_btn">login</button> </Link> </div>
          }
        </div>

        

        <div className="header-option">
          <Link to="/">
            <img src={like} alt="wishlist"/>
            <p style={{position:"relative",top:"-10px",left:"-5px",color:"red"}}>
               <strong>0</strong> 
            </p>
            
           </Link>
        </div>

        <div className="header-option">
          <Link to="/cart">
            <img src={cart} alt="wishlist"/>
            <p style={{position:"relative",top:"-10px",left:"-5px",color:"red"}}>
               <strong>{numberCarts}</strong>
            </p>
           </Link>
        </div>

      </div>
    </div>
  );
}
export default Header;

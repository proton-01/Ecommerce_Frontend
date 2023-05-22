import {React , useEffect} from 'react';
import "../style/cart.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import CartItem from '../components/CartItem';
import Footer from '../components/Footer';

import {Link} from "react-router-dom";
import {useSelector ,useDispatch} from "react-redux";

import { clearCart } from '../redux/cart/cartActions';
import { GET_TOTAL } from '../redux/cart/cartActions';

function Cart() {

    const carts = useSelector( state => state.cart.carts);
    const numberCarts = useSelector(state => state.cart.numberCarts);
    const state = useSelector(state => state);
    const totalAmount = useSelector(state =>state.cart.totalAmount);
    const dispatch = useDispatch();

    // console.log(carts);
   
    // total amount will update after every time we change number of products
    useEffect( ()=>{ 
      dispatch ({ type: GET_TOTAL})
    } ,[state.cart.carts])


    if (carts.length === 0) {
        return (
          <>
            <header>
              <div className="continue-shopping" style={{"display":"flex" ,"alignItems":"center"}}>
                <Link to="/shop">
                 <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                 <h3>continue shopping</h3>
              </Link>
              </div>
    
              <div className="cart-icon">
                <img src="./images/cart.png" alt="cart" />
                <p>0</p>
              </div>
            </header>
    
            <section className="main-cart-section" style={{height:"55vh"}}>
              <h1>shopping Cart</h1>
              <p className="total-items">
                you have <span className="total-items-count">0</span>{" "}
                items in shopping cart
              </p>
            </section>
           <Footer/>
          </>
        );
      }

      return (
        <>

        
          <header>
            <div className="continue-shopping">
            <Link to="/shop">
                 <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                 <h3>continue shopping</h3>
              </Link>
            </div>
    
            <div className="cart-icon">
              <img src="./images/cart.png" alt="cart" />
              <p>{numberCarts}</p>
            </div>
          </header>
    
          <section className="main-cart-section">
            <div className='main-cart-section-header'>
               <h1>shopping Cart</h1>
               <p className="total-items">
                 you have <span className="total-items-count">{numberCarts} </span> items
                 in shopping cart
               </p>
            </div>
    
            <div className="cart-items">
              <div className="cart-items-container">
                <Scrollbars>
                  {carts.map((curItem ,key) => {
                    return <CartItem key={key} {...curItem} />;
                  })}
                  </Scrollbars>
              </div>
            </div>
    
            <div className="card-total">
              <h3>
                Cart Total : <span>${totalAmount}</span>
              </h3>
              <button>checkout</button>
              <button className="clear-cart"  onClick={ ()=> dispatch( clearCart())}>
                Clear Cart
              </button>
            </div>
          </section>

          <Footer/>

        </>
      );
  
}

export default Cart
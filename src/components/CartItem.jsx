import React from 'react'

import { increment ,decrement ,removeItem } from '../redux/cart/cartActions';
import { useDispatch } from 'react-redux';

function CartItem(curItem) {

  const dispatch = useDispatch();

  return (
    <>
    <div className='cartItem'>

   
      <div className="items-info">
        <div className="product-img">
          <img src={curItem.img} alt="iamge" />
        </div>

        <div className="title">
          <h2>{curItem.title}</h2>
         
        </div>

        <div className="add-minus-quantity">
          <i className="fas fa-minus minus" onClick={() => dispatch(decrement(curItem.id))} ></i>
          <input type="text" placeholder={curItem.quantity} disabled />
          <i className="fas fa-plus add"  onClick={()=> dispatch(increment(curItem.id))}></i>
        </div>

        <div className="price">
          <h3>${curItem.price}</h3>
        </div>

        <div className="remove-item">
          <i className="fas fa-trash-alt remove" onClick={() => dispatch(removeItem(curItem.id))}></i>
        </div>
       </div>
      </div>
      <hr />
    </>
  )
}

export default CartItem
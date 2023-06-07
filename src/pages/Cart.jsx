import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Store/cartSlice';

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  console.log(products)
  const RemoveProduct = (id) => {
    dispatch(remove(id));
  }
  return (
    <div>
      <h3>Cart</h3>
      <div className="cartWrapper">
        {
          products.map((product) => {
            return <div className="cartCard" key={product.id}>
              <img src={product.image} alt="" />
              <h5>{product.title}</h5>
              <h5>$ {product.price}</h5>
              <button className='btn' onClick={() => RemoveProduct(product.id)}>Remove</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Cart

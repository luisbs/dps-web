import React from "react";
import data from "../data";
import { BrowserRouter, Route, Link } from "react-router-dom";

function CartScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  console.log(props.match.params.id);

  return (
    <div className="cart">
      <div className="cart-list">
        <ul className="cart-list-container">
          <li>
            <h3>Shopping cart</h3>
            <div>Price</div>
          </li>
          <div>
            <div className="cart-image">
                <li>
              <img src={product.image} alt="product"></img>
              <div className="cart-name">
              <b><div>{product.name}</div></b>
              <div>
                cantidad
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
                <button type="button" className="button-cart">
                  Delete
                </button>
                <div>Price $ {product.price}</div>
              </div>
            </div>
              </li>
            </div>
          
      
          </div>
        </ul>
      </div>
      <div className="cart-action">
        <h3>subtotal ({})</h3>
        <div>$ {product.price}</div>
        <button className="button primary">Proceed to Checkout</button>
      </div>
    </div>
  );
}
export default CartScreen;

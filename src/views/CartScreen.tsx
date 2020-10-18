import React, { useEffect, useState } from "react"

import { ProductModel, ProductView } from "../plugins/firestore/collections"

/**
 * Muestra una targeta con la informacion del usuario
 * @param {string} id Identificador del producto
 */
export default function CartScreen({ id }: { id: string }) {
  const [product, setProduct] = useState<ProductView>()

  /** Ejecutado solo al montar y desmontar */
  useEffect(() => {
    ProductModel.get(id)
      .then(doc => {
        // @ts-expect-error
        if (doc.exists) setProduct({ id: doc.id, ...doc.data() })
        throw new Error("Producto no encontrado")
      })
      .catch(err => console.log(err))
  }, [])

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
                <img src={product?.imageURL} alt="product"></img>
                <div className="cart-name">
                  <b>
                    <div>{product?.name}</div>
                  </b>
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
                    <div>Price $ {product?.price}</div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </ul>
      </div>
      <div className="cart-action">
        <h3>subtotal ({})</h3>
        <div>$ {product?.price}</div>
        <button className="button primary">Proceed to Checkout</button>
      </div>
    </div>
  )
}

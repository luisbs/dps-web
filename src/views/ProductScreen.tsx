import React, { useEffect, useState } from "react"

import { ProductModel, ProductView } from "../plugins/firestore/collections"

/**
 * Vista para visualizar laifnormación detallada de un producto
 * @param {string} id Identificador del producto
 */
export default function ProductScreen({ id }: { id: string }) {
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
    <div className="details">
      <div className="details-image">
        <img src={product?.imageURL} alt="product"></img>
      </div>
      <div className="details-info">
        <ul>
          <li>
            <h4>{product?.name}</h4>
          </li>
          <li>
            {product?.rating} Stars({product?.reviewsQuantity} Reviews)
          </li>
          <li>
            <b>{product?.price}</b>
          </li>
          <li>
            Description:
            <div>{product?.name}</div>
          </li>
        </ul>
      </div>
      <div className="details-action">
        <ul>
          <li>
            price: <b>${product?.price}</b>
          </li>
          {/*<li>status: {product?.status}</li>*/}
          <li>
            Cantidad:
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </li>
          <li>
            <button className="button primary">ADD to cart</button>
          </li>
        </ul>
      </div>
    </div>
  )
}

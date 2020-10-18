import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { ProductModel, ProductView } from "../plugins/firestore/collections"

export default function HomeScreen() {
  const [products, setProducts] = useState<ProductView[]>([])

  /** Ejecutado solo al montar y desmontar */
  useEffect(() => {
    ProductModel.list()
      .then(data => data.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      .then(docs => setProducts(docs))
      .catch(err => console.log(err))
  }, [])

  return (
    <ul className="products">
      {products.map(doc => (
        <li key={doc.id}>
          <div className="product">
            <Link to={`/product/${doc.id}`}>
              <img className="product-image" src={doc.imageURL} alt="product" />
            </Link>
            <div className="product-name">
              <Link to={`/product/${doc.id}`}>{doc.name}</Link>
            </div>
            <div className="product-brand">{doc.brand}</div>
            <div className="product-price">{doc.price}</div>
            <div className="product-rating">
              {doc.rating} Stars ({doc.reviewsQuantity} Reviews)
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

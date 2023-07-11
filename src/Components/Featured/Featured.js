import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts, featuredProducts } from "../../Features/products/productsSlice";

export default function Featured() {
  const products = useSelector(selectProducts);

  return(
    <ul>
        { featuredProducts(products).map(product => (
          <li key={product.slug}>
            <div className="product-card">
              <Link to={`/products/${product.slug}`}>
                {product.name}
              </Link>
              <img src={product.image} alt={product.name}/>
            </div>
          </li>
        )) }
      </ul>
  )
}
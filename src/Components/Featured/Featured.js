import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, featuredProducts } from "../../Features/products/productsSlice";
import { Link } from "react-router-dom";

export default function Featured() {
  const products = useSelector(selectProducts);

  // const features = name ? featuredProducts(products) : Object.values(products)

  return(
    <ul>
        { featuredProducts.map(product => (
          <li key={product.slug}>
            <div className="product-card">
              <Link to={`${product.slug}`}>
                {product.name}
              </Link>
              <img src={product.image} alt={product.name}/>
            </div>
          </li>
        )) }
      </ul>
  )
}
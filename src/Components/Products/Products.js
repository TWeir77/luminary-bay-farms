import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, filterProducts } from "../../Features/products/productsSlice";
import { Link } from "react-router-dom";

export default function Products() {
  const products = useSelector(selectProducts);

  const name = '';

  const filteredProducts = name ? filterProducts(name, products) : Object.values(products)

  return (
    <main>
      <h1>Microgreens</h1>
      <h2>Learn more about the best microgreens grown at Luminary Bay Farms!</h2>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.slug}>
            <div className="product-card">
              <Link to={`${product.slug}`}>
                {product.name}
              </Link>
              <img src={product.image} alt={product.name} />
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
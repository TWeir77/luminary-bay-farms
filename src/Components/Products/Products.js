import React from "react";
import { useSelector } from "react-redux";
import { selectProducts, filterProducts } from "../../Features/products/productsSlice";
import { Link } from "react-router-dom";
import './Products.css';

export default function Products() {
  const products = useSelector(selectProducts);

  const name = '';

  const filteredProducts = name ? filterProducts(name, products) : Object.values(products)

  return (
    <div className="products">
      <h1 className="section-title" id="products-title">Microgreens</h1>
      <h2>Learn more about the best microgreens grown at Luminary Bay Farms!</h2>
      <ul className="product-list">
        {filteredProducts.map(product => (
          <li key={product.slug}>
            <Link className="product-card" to={`${product.slug}`}>
              <h3 className="product-name">
                {product.name}
              </h3>
              <img src={product.image} alt={product.name} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
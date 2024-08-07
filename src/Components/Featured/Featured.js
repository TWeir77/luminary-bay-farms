import React from "react";
import ScrollToTop from "../../App/scrollToTop";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProducts, featuredProducts } from "../../Features/products/productsSlice";
import './Featured.css'

export default function Featured() {
  const products = useSelector(selectProducts);

  return (
    <div className="featured-main">
      <h2 className='section-title' >Featured Favorites</h2>
      <ul className='featured-list' >
        {featuredProducts(products).map(product => (
          <li key={product.slug}>
            <ScrollToTop />
            <Link className="product-card" to={`/products/${product.slug}`}>
              <h3 className='product-name' >
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
import React from "react";
import './Product.css';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProducts } from "../../Features/products/productsSlice";

export default function Product() {
  const products = useSelector(selectProducts);
  const { name } = useParams();
  const product = products[name];

  return product ? (
    <div className="product-container">
      <div className="product-content">  
        <h1 className="product-name">{product.name}</h1>
        <aside>{product.featured ? 'Feature Favorite' : 'New Addition'}</aside>
        <p>{product.body}</p>
      </div>
      <img className='product-img' src={product.image} alt={product.name}/>
    </div>
  ) : <p> No product found with that title... </p>
}
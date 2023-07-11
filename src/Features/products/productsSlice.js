import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../App/data';

export const articlesSlice = createSlice({
  name: 'products',
  initialState: {
    products: PRODUCTS,
  },
  reducers: {}
});

export const selectProducts = (state) => state.products.products;
export const filterProducts = (query, products) => Object.values(products).filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
export const featuredProducts = (products) => Object.values(products).filter(product => {
  if (product.featured) {
    return product
  }});
export default articlesSlice.reducer;

// console.log(featuredProducts(PRODUCTS))
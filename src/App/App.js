import logo from '../logo.svg';
import React from 'react';
import About from "../Components/About/About";
import Contact from "../Components/Contact/Contact";
import Featured from "../Components/Featured/Featured";
import Home from "../Components/Home/Home";
import Products from "../Components/Products/Products";
import Product from '../Components/Product/Product';
import Root from '../Components/Root/Root';

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About />} />
    <Route path='/products' element={<Products />} />
    <Route path='/products/:name' element={<Product />} />
    <Route path='/contact' element={<Contact />} />
  </Route>
))

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

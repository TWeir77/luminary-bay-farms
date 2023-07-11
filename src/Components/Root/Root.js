import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
//import Home from "../Home/Home";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
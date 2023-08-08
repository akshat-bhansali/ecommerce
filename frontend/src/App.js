import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter , Route,Routes, Switch } from "react-router-dom";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from './component/Product/Search.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
          <Routes>
          <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/products" element={<Products/>} />

        <Route path="/products/:keyword" element={<Products/>} />
        <Route path="/search" element={<Search />} />
          </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

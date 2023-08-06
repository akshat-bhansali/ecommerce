import React from 'react'
import ProductCard from "./ProductCard.js";
import "./Home.css";


const product = {
    name : "Test Prod",
    images : [{ url :"https://www.pexels.com/photo/black-motorcycle-parked-on-gray-concrete-road-9266562/"}],
    price : 3000,
    _id : "akshat"
};

const Home = () => {
  return (
    <div>
      <h2>Featured Products</h2>
      <div className='container'>
      <ProductCard  product={product} />
      <ProductCard  product={product} />
      <ProductCard  product={product} />
      <ProductCard  product={product} />
      <ProductCard  product={product} />
      <ProductCard  product={product} />
      </div>
    </div>
  )
}

export default Home

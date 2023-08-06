import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter , Route,Routes, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Home/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

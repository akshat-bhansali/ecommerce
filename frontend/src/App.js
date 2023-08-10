import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import { BrowserRouter , Route,Routes, Switch } from "react-router-dom";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from './component/Product/Search.js';
import LoginSignUp from './component/User/LoginSignUp.js';
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from './component/User/Profile.js';
import UpdateProfile from "./component/User/UpdateProfile";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    
    store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  return (
    <>
    <BrowserRouter>
      <Header/>
      {isAuthenticated && <UserOptions user={user} />}
          <Routes>
          <Route path='/' element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/products" element={<Products/>} />

        <Route path="/products/:keyword" element={<Products/>} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<LoginSignUp />} />
        {isAuthenticated && <Route path="/account" element={<Profile />} />}
        {isAuthenticated && <Route path="/me/update" element={<UpdateProfile />} />}
          </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;

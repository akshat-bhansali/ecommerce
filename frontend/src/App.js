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
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";

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
        {isAuthenticated && <Route path="/password/update" element={<UpdatePassword />} />}
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword/>} />
        <Route path="/cart" element={<Cart/>} />
        {isAuthenticated && <Route path="/shipping" element={<Shipping />} />}
        {isAuthenticated && <Route path="/order/confirm" element={<ConfirmOrder />} />}
        {isAuthenticated && <Route path="/success" element={<OrderSuccess/>} />}
        {isAuthenticated && <Route path="/orders" element={<MyOrders/>} />}
        {isAuthenticated && <Route path="/order/:id" element={<OrderDetails/>} />}
          </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
    </>
  );
}

export default App;

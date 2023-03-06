import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from '../Components/ProductPage';
import SingleProduct from '../Components/SingleProduct';
import Cart from "../Components/Cart"
import { MainCheckout } from '../Components/Checkout/MainCheckout';
import CardPayment from '../Components/CardPayment/CardPayment';
import Success from '../Components/SucessPage/Success';
import Login from '../Components/Login/Login';
import Signup from '../Components/Signup/Signup';
import { Signup_Welcome } from '../Components/Signup/Signup_Welcome';
import { PrivateRoute } from './PrivateRoute';


const Routing = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
          <Route path="/sofas" element={<ProductPage />} />
            <Route path='/sofas/:id' element={<PrivateRoute><SingleProduct /></PrivateRoute>} /> 
            <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path="/checkout" element={<MainCheckout />} /> 
        <Route path="/cardpayment" element={<CardPayment />} />
        <Route path="/paymentdone" element={<Success />} />
        <Route path='/signup/welcome' element={<Signup_Welcome />} />
        </Routes>
      </div>
    );
  }
  
  export { Routing }
  
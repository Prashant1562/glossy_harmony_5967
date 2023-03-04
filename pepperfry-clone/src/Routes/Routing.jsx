import React from 'react'
import { Home } from "../Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from '../Components/ProductPage';
import SingleProduct from '../Components/SingleProduct';

const Routing = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sofas" element={<ProductPage />} />
            <Route path='/sofas/:id' element={<SingleProduct />} /> 
        </Routes>
      </div>
    );
  }
  
  export { Routing }
  
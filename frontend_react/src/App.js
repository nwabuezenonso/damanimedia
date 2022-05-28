import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {Home, About, WeddingStories, Portfolio, AboutDetail, Product, ProductDetail, Checkout } from './container'
import { Navbar, Footer} from './miniComponent'
import './App.css'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/weddingstories" element={<WeddingStories /> }/>
          <Route path="/portfolio" element={<Portfolio /> }/>
          <Route path="/about"  element={<About /> }/>
          <Route path="/about/:id" element={<AboutDetail /> }/>
          <Route path="/contact" element={<AboutDetail /> }/>
          <Route path="/products" element={<Product /> }/>
          <Route path="/products/:id" element={<ProductDetail /> }/>
          <Route path="/checkout" element={<Checkout /> }/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;

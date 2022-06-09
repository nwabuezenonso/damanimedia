import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {Home,WeddingStories,ContactMe, WeddingStoriesDetails, Portfolio, AboutDetail, Product, ProductDetail, Checkout } from './container'
import { Navbar} from './miniComponent'
import { Footer } from './miniComponent';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/weddingstories" element={<WeddingStories /> }/>
        <Route path="/weddingstories/:id" element={<WeddingStoriesDetails /> }/>
        <Route path="/products" element={<Product /> }/>
        <Route path="/products/:id" element={<ProductDetail /> }/>
        <Route path="/checkout" element={<Checkout /> }/>
      </Routes>
    </div>
  );
}

export default App;

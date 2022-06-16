import React from 'react';
import { Routes, Route } from 'react-router-dom'
import {Home,WeddingStories, WeddingStoriesDetails } from './container'
import { Navbar} from './miniComponent'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/weddingstories" element={<WeddingStories /> }/>
        <Route path="/weddingstories/:id" element={<WeddingStoriesDetails /> }/>
      </Routes>
    </div>
  );
}

export default App;

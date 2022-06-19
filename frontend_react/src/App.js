import React, { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom'
import {Home,WeddingStories, WeddingStoriesDetails } from './container'
import { Navbar} from './miniComponent'
import BarLoader from "react-spinners/BarLoader";
import './App.css'

function App() {
  const [ loading, setLoading ] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => (
      setLoading(false)
    ), 2000)
  }, [])

  return (
    <div className="App">
      {
        loading ? 
        <div className='loader'><BarLoader  color={'#fff'} loading={loading} size={150} /></div>
        :
        <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home /> }/>
          <Route path="/weddingstories" element={<WeddingStories /> }/>
          <Route path="/weddingstories/:id" element={<WeddingStoriesDetails /> }/>
        </Routes>
        </div>
      }
    </div>
  );
}

export default App;

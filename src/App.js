import './scss/main.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import MyWishList from "./components/MyWishList";

function App() {

  return (
    <>
<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<MyWishList />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;


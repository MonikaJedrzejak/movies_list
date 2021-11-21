import './scss/main.scss';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home.js";
import MyWishList from "./components/MyWishList";
import { useCookies } from 'react-cookie';

function App() {
  const [cookies, setCookie] = useCookies([]);
  let wishlistFromCookies = cookies.wishlist;
  const [wishlist, setWishlist] = useState(
    (!wishlistFromCookies == null) ?
      wishlistFromCookies : '');

  useEffect(() => {
		let cookieData = JSON.stringify(wishlist);
		setCookie('wishlist', cookieData, { path: '/' });
	},[wishlist, setCookie])

  return (
    <>
<Router>
      <Routes>
        <Route path="/" element={<Home wishlist={wishlist} setWishlist={setWishlist}/>} />
        <Route path="/wishlist" element={<MyWishList wishlist={wishlist} setWishlist={setWishlist}/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App;


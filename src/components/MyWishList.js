import React from 'react';
import LoadCookieList from './LoadCookieList.js';
import Menu from "./Menu.js";


export default function MyWishList({wishlist, setWishlist}) {
    

    return (
        <div>
            <Menu />
            <LoadCookieList wishlist={wishlist} setWishlist={setWishlist}/>
        </div>
    )
}

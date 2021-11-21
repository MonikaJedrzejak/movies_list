import React from 'react';
import { useCookies } from 'react-cookie';
import WishListCard from "./WishListCard.js";

export default function LoadCookieList({wishlist, setWishlist}) {
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies();
    let wishlistFromCookies = cookies.wishlist;


    return (
        <div className="container">
            <ul className="movie-card-container">
				{wishlistFromCookies.length ? (
					wishlistFromCookies.map((el, idx) => <li key={idx}><WishListCard imdbID={el} wishlist={wishlist} setWishlist={setWishlist}/></li>)
				) : (
					<p>No results </p>
				)}
			</ul>
        </div>
    )
}

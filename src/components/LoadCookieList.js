import React, {useState} from 'react';
import { useCookies } from 'react-cookie';
import WishListCard from "./WishListCard.js";
import Pagination from "react-responsive-pagination";

export default function LoadCookieList({wishlist, setWishlist}) {
    // eslint-disable-next-line
    const [cookies, setCookie] = useCookies();
    let wishlistFromCookies = cookies.wishlist;
    const [currentPage, setCurrentPage] = useState(1);
    const pages = Math.ceil(wishlistFromCookies.length / 10);
    console.log(currentPage);

    return (
        <div className="container">
            <ul className="movie-card-container">
				{wishlistFromCookies.length ? (
					wishlistFromCookies.filter((el,idx)=> idx >= ((currentPage *10)-10) && idx <=((currentPage *10)-1)).map((el, idx) => <li key={idx}><WishListCard imdbID={el} wishlist={wishlist} setWishlist={setWishlist}/></li>)
				) : (
					<p>No results </p>
				)}
			</ul>
            <div className="results-pagination" >
				<Pagination
					current={currentPage}
					total={pages}
					onPageChange={setCurrentPage}
          			previousLabel="<<"
          			nextLabel=">>"
				/>
			</div>
        </div>
    )
}

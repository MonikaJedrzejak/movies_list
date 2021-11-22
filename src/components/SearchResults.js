import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.js";
import MovieCard from "./MovieCard.js";
import { getMovies, getMoviesFromPage } from "../api/operations";
import Pagination from "react-responsive-pagination";
import { animateScroll } from 'react-scroll';

export default function SearchResults({wishlist, setWishlist}) {
	const [movie, setMovie] = useState({});
	const [totalResults, setTotalResults] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	

	useEffect(() => {
		getMovies(searchQuery, setMovie, setTotalResults);
	}, [searchQuery]);
  	useEffect(() => {
		getMoviesFromPage(searchQuery, currentPage, setMovie);
		animateScroll.scrollToTop({
			duration: 1500,
			delay: 50,
			smooth: 'easeInOutQuint'});
		// eslint-disable-next-line
	}, [currentPage]);

	let pageList = [];
	let pagesNum = [];
	pageList = movie;
	pagesNum = totalResults;

	const pages = Math.ceil(pagesNum / 10);

	// const createPages = () => {<div className="results-pagination">{createPages()}</div>
	// 		  <button className="btn-page" onClick={()=> console.log(i)}>{i}</button>
	// 		}
	// 	  </div>)
	// 	 }
	// 	return table
	//   }
	// useEffect(() => {
	// 	let cookieData = JSON.stringify(wishlist);
	// 	setCookie('wishlist', cookieData, { path: '/' });
	// },[wishlist, setCookie])

	return (
		<div className="container">
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			
			<ul className="movie-card-container">
				{pageList.length ? (
					pageList.map((el, idx) => <li key={idx}><MovieCard movie={el} wishlist={wishlist} setWishlist={setWishlist}/></li>)
				) : (
					<p>No results</p>
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
	);
}

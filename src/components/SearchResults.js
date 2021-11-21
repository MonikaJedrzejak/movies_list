import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar.js";
import MovieCard from "./MovieCard.js";
import { getMovies, getMoviesFromPage } from "../api/operations";
import Pagination from "react-responsive-pagination";

export default function SearchResults() {
	const [movie, setMovie] = useState({});
	const [totalResults, setTotalResults] = useState(1);
	const [searchQuery, setSearchQuery] = useState("pooh");
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		getMovies(searchQuery, setMovie, setTotalResults);
	}, [searchQuery]); 
  	useEffect(() => {
		getMoviesFromPage(searchQuery, currentPage, setMovie);
		// eslint-disable-next-line
	}, [currentPage]);

	let pageList = [];
	let pagesNum = [];
	pageList = movie;
	pagesNum = totalResults;
	// console.log(pageList);
	// console.log(pagesNum);

	const pages = Math.ceil(pagesNum / 10);

	// const createPages = () => {<div className="results-pagination">{createPages()}</div>
	// 		  <button className="btn-page" onClick={()=> console.log(i)}>{i}</button>
	// 		}
	// 	  </div>)
	// 	 }
	// 	return table
	//   }

	return (
		<div className="container">
			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			
			<ul className="movie-card-container">
				{pageList.length ? (
					pageList.map((el, idx) => <li key={idx}><MovieCard movie={el}/></li>)
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
	);
}

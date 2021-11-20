import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar.js';
import {getMovies} from '../api/operations';

export default function SearchResults() {
    const [movie, setMovie] = useState({});
    const [totalResults, setTotalResults] = useState(1);
    const [searchQuery, setSearchQuery] = useState('pooh');

    useEffect(() => {
      getMovies(searchQuery, setMovie, setTotalResults);
      console.log(movie);
  }, [searchQuery]);


    // const API_KEY = "53eedff4";
    // const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`;

    // useEffect(() => {
    //   fetch(url)
    //     .then((res) => {
    //       if (res.ok) {
    //         return res.json();
    //       }
    //       throw new Error("Ups...");
    //     })
    //     .then(( {Search, totalResults} ) => {
    //       console.log(Search);
    //       console.log(totalResults);
    //       setMovie(Search);
    //     })
    //     .catch((err) => console.log(err));
    // }, [searchQuery]);

    let pageList = [];
    let pagesNum = [];
    pageList = movie;
    pagesNum = totalResults
    console.log(pageList);
    console.log(pagesNum);

    const pages = Math.ceil(pagesNum/10);
	
	const createPages = () => {
		let table = [];
		for (let i = 1; i <= pages; i++) {
			
		  table.push(<div>
			{
			  <button className="btn-page" onClick={()=> console.log(i)}>{i}</button>
			}
		  </div>)
		 }
		return table
	  }



    return (
        <div className="container">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ul>
              {pageList.length ? (pageList.map((el) => <li key={el.imdbID}>{el.Title}</li>)) : (<p>loading...</p>)}
            </ul>
            <div className="results-pagination">{createPages()}</div>
			</div>
        
    )
}
//TO DO ogarnij blad -  brak wynikow
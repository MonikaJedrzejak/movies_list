import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar.js';
import {getMovies} from '../api/operations';

export default function SearchResults() {
    const [movie, setMovie] = useState({});
    const [searchQuery, setSearchQuery] = useState('pooh');

    useEffect(() => {
      getMovies(searchQuery, setMovie);
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
    pageList = movie;
    console.log(pageList);
    return (
        <div>
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <ul>
              {pageList.length ? (pageList.map((el) => <li key={el.imdbID}>{el.Title}</li>)) : (<p>loading...</p>)}
            </ul>
        </div>
    )
}
//TO DO ogarnij blad -  brak wynikow
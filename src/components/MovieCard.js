import React, {useState, useEffect} from 'react';
import { getMovieInfo } from "../api/operations";
import star from '../assets/star.svg';
import starO from '../assets/starO.svg';

export default function MovieCard({movie, wishlist, setWishlist}) {
        const {Title, Year, imdbID, Type, Poster} = movie;
        const [movieInfo, setMovieInfo] = useState({});

        useEffect(() => {
		getMovieInfo(imdbID, setMovieInfo);
        return () => {
            setMovieInfo({});
        }
	}, [movie, imdbID, setMovieInfo]);

    const toggleWishList = () => {
        if(!wishlist.includes(imdbID)) {
            setWishlist(oldArray => [...oldArray, imdbID]);
        } else if (wishlist.includes(imdbID)) {
            let index = wishlist.findIndex(el => el === imdbID);
            let newTab = wishlist.filter((item, idx) => idx !== index);
            setWishlist(newTab);

        }
    }

    return (
            <div className="movie-card-box">
            <div className="btn-add" onClick={toggleWishList}>
            {wishlist.includes(imdbID) ? (<img className="icon-star" src={star} alt="star icon"></img>) : (<img className="icon-star" src={starO} alt="star icon"></img>)}
            </div>
                <img className="movie-card-poster" src={Poster} alt={`Poster - ${Title}`}/>
                <div className="movie-card-title-bottom">
                    <h3 className="movie-card-title">{Title}</h3>
                    <div className="movie-card-info">
                        <p>{Type}</p>
                        <p>{Year}</p>
                        <p>{movieInfo.imdbRating}</p>
                    </div>
                </div>
            </div>
    )
}

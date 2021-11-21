import React, {useState, useEffect} from 'react';
import { getMovieInfo } from "../api/operations";
// import star from '../assets/star.svg';
import starO from '../assets/starO.svg';

export default function MovieCard({movie}) {
        const {Title, Year, imdbID, Type, Poster} = movie;
        const [movieInfo, setMovieInfo] = useState({});
        useEffect(() => {
		getMovieInfo(imdbID, setMovieInfo);
        return () => {
            setMovieInfo({});
        }
	}, [movie, imdbID, setMovieInfo]);
        

    return (
            <div className="movie-card-box">
            <div className="btn-add">
            <img className="icon-star" src={starO} alt="star icon"></img>
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

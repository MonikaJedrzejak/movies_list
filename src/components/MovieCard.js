import React, {useState} from 'react';
import { getMovieInfo } from "../api/operations";

export default function MovieCard({movie}) {
        const {Title, Year, imdbID, Type, Poster} = movie;
        const [movieInfo, setMovieInfo] = useState({});
        getMovieInfo(imdbID, setMovieInfo);

    return (
        <div>
            <img src={Poster} alt={`Poster - ${Title}`}/>
            <p>{Title}</p>
            <p>{Year}</p>
            <p>{Type}</p>
            <p>{movieInfo.imdbRating}</p>
        </div>
    )
}

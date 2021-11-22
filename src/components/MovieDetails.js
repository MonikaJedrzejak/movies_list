import React, { useState, useEffect } from "react";
import { getMovieInfo } from "../api/operations";
import Popup from "reactjs-popup";
import star from "../assets/star.svg";
import starO from "../assets/starO.svg";

export default function MoveDetails({ imdbID, wishlist, setWishlist }) {
	const [movieInfo, setMovieInfo] = useState({});

	useEffect(() => {
		getMovieInfo(imdbID, setMovieInfo);
		return () => {
			setMovieInfo({});
		};
	}, [imdbID, setMovieInfo]);

	const toggleWishList = () => {
		if (!wishlist.includes(imdbID)) {
			setWishlist((oldArray) => [...oldArray, imdbID]);
		} else if (wishlist.includes(imdbID)) {
			let index = wishlist.findIndex((el) => el === imdbID);
			let newTab = wishlist.filter((item, idx) => idx !== index);
			setWishlist(newTab);
		}
	};
	const {
		Title,
		Genre,
		Country,
		Writer,
		Director,
		Year,
		Awards,
		Plot,
		Runtime,
		imdbRating,
	} = movieInfo;
	return (
		<Popup 
			trigger={<button className="btn-no-border"> More Info </button>}
			modal
			nested>
			{(close) => (
				<div className="modal details">
					<div className="details-header">
                        <div className="btn-details-add" onClick={toggleWishList}>
						{wishlist.includes(imdbID) ? (
							<img className="icon-star" src={star} alt="star icon"></img>
						) : (
							<img className="icon-star" src={starO} alt="star icon"></img>
						)}
					</div>
                    <div className="details-title"><h3>{Title}</h3></div>
                    </div>
					<div className="content">
						<div className="details-info">
							<div className="details-info-row">
								<div className="details-item">
									<span>Genre:</span> {Genre}
								</div>
							</div>

							<div className="details-info-row">
								<p className="details-item">
									<span>Country:</span> {Country}
								</p>
								<p className="details-item">
									<span>Year:</span> {Year}
								</p>
							</div>
							<div className="details-info-row">
								<p className="details-item">
									<span>Runtime:</span> {Runtime}
								</p>
								<p className="details-item details-rating">
									<span>iMDb Rating:</span> {imdbRating}/10
								</p>
							</div>
							<div className="details-info-row">
								<p className="details-item">
									<span>Director:</span> {Director}
								</p>
								<p className="details-item">
									<span>Writer:</span> {Writer}
								</p>
							</div>
						</div>
						<p className="details-line">
							<span>Awards: </span>
							{Awards}
						</p>
						<p className="details-line">{Plot}</p>
					</div>
					<div className="actions">
                    
						<button
							className="btn"
							onClick={() => {
								console.log("modal closed ");
								close();
							}}>
							close
						</button>
					</div>
				</div>
			)}
		</Popup>
		//     <Popup trigger={<button> Trigger</button>} position="right center">
		//     <div className="popup-content">Popup content here !!</div>
		//   </Popup>
	);
}

// import React, {useState, useEffect} from 'react';
// import { getMovieInfo } from "../api/operations";
// import star from '../assets/star.svg';
// import starO from '../assets/starO.svg';

// export default function MovieDetails({imdbID, wishlist, setWishlist}) {

//     const [movieInfo, setMovieInfo] = useState({});

//         useEffect(() => {
// 		getMovieInfo(imdbID, setMovieInfo);
//         return () => {
//             setMovieInfo({});
//         }
// 	}, [ imdbID, setMovieInfo]);

//     const toggleWishList = () => {
//         if(!wishlist.includes(imdbID)) {
//             setWishlist(oldArray => [...oldArray, imdbID]);
//         } else if (wishlist.includes(imdbID)) {
//             let index = wishlist.findIndex(el => el === imdbID);
//             let newTab = wishlist.filter((item, idx) => idx !== index);
//             setWishlist(newTab);

//         }
//     }
//     return (
//             <div className="detail-card-box">
//             <div className="btn-add" onClick={toggleWishList}>
//             {wishlist.includes(imdbID) ? (<img className="icon-star" src={star} alt="star icon"></img>) : (<img className="icon-star" src={starO} alt="star icon"></img>)}
//             </div>
//                 <img className="detail-card-poster" src={movieInfo.Poster} alt={`Poster - ${movieInfo.Title}`}/>
//                 <div className="detail-card-title-bottom">
//                     <h3 className="detail-card-title">{movieInfo.Title}</h3>
//                     <div className="detail-card-info">
//                         <p>{movieInfo.Genre}</p>
//                         <p>{movieInfo.Year}</p>
//                         <p>{movieInfo.imdbRating}</p>
//                     </div>
//                     <article className="detail-desc">{movieInfo.Plot}</article>
//                 </div>
//             </div>
//     )
// }

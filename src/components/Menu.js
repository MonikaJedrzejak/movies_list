import React from "react";
import logo from "../assets/movieIcon.svg";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<>
			<div className=" container menu-container">
				<Link className="logo" to="/">
					<img src={logo} alt="logo" />
					<span>movie wishlist</span>
				</Link>
				<div className="menu-nav">
					<Link className="menu-nav-item" to="/">
						Home
					</Link>
					<Link className="menu-nav-item" to="/wishlist">
						My wishlist
					</Link>
				</div>
			</div>
			<div className="menu-line"></div>
		</>
	);
}

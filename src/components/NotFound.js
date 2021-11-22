import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="notFound">
			<h1>404 - Not Found!</h1>
			<Link className="btn" to="/">
				Go Home
			</Link>
		</div>
	);
}

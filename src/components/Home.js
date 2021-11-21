import React from "react";
import Menu from "./Menu.js";
import SearchResults from "./SearchResults.js";

export default function Home({wishlist, setWishlist}) {
	return (
		<div>
			<Menu />
			<SearchResults wishlist={wishlist} setWishlist={setWishlist} />
		</div>
	);
}

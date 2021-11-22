import React, { useState } from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
	const [formData, setFormData] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e) => {
		e.preventDefault();
		setError(
			e.target.value.length < 3 ? "Name must have at least 3 characters" : " "
		);
		setFormData(e.target.value);
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
			setSearchQuery(formData);
		}
	};
	return (
		<form className="form-searchbar">
			<input
				value={formData}
				onChange={handleChange}
				onKeyDown={handleKeyDown}
				type="text"
				id="header-search"
				placeholder="Type a name and press enter"
				title="Type a name and press enter"
			/>
			<span className="form-err">{error}</span>
		</form>
	);
}

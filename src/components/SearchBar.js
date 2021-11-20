import React, { useState } from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
	const [formData, setFormData] = useState('');

	const handleChange = (e) => {
		e.preventDefault();
		setFormData(e.target.value);
	};

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(formData);
            setSearchQuery(formData);
        }
    }
	return (
		<form className="form-searchbar">
			<input
				value={formData}
                onChange={handleChange}
				onKeyDown={handleKeyDown}
				type="text"
				id="header-search"
				placeholder="Search"
			/>
		</form>
	);
}

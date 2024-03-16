import './SearchInput.scss';

import SearchIcon from '../../assets/icons/search_icon.svg';
import { useState } from 'react';

export function SearchInput({ inputPlaceholder, clickBtn }) {
	const [search, setSearch] = useState('');

	return (
		<div className="search_input">
			<img
				src={SearchIcon}
				onClick={() => clickBtn(search)}
			/>
			<input
				type="search"
				placeholder={inputPlaceholder}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</div>
	);
}

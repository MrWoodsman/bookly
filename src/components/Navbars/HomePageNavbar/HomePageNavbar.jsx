import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../DeafaultNavbarstyle.scss';

export function HomePageNavbar() {
	const navigate = useNavigate();
	const [scorlY, setScrolY] = useState(window.scrollY);

	return (
		<section className="home_page_navbar">
			<div className="content">
				<h1>Bookly</h1>
				<button onClick={() => navigate('dashboard')}>panel użytkownika</button>
			</div>
		</section>
	);
}

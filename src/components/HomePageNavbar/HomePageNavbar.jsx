import { useEffect, useState } from 'react';
import './HomePageNavbar.scss';

export function HomePageNavbar() {
	const [scorlY, setScrolY] = useState(window.scrollY);

	return (
		<section className="home_page_navbar">
			<div className="content">
				<h1>Bookly</h1>
				<button>panel użytkownika</button>
			</div>
		</section>
	);
}

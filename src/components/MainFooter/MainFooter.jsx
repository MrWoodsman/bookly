import './MainFooter.scss';

export function MainFooter() {
	return (
		<footer className="main_footer">
			<div className="content links">
				<a>O nas</a>
				<a>FAQ</a>
				<a>Polityka prywatności</a>
				<a>Kontakt</a>
			</div>
			<div className="space"></div>
			<div className="content copyright">
				<h1>Bookly</h1>
				<p>
					&#169; {new Date().getFullYear()} Bookly Inc. Wszystkie prawa zastrzeżone
				</p>
			</div>
		</footer>
	);
}

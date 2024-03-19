import './Navbar.scss';

export function Navbar({ text }) {
	return (
		<section className="navbar">
			<div className="title">
				<div className="content">
					<h1>{text}</h1>
				</div>
			</div>
		</section>
	);
}

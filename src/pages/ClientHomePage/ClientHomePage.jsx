import './ClientHomePage.scss';

import { HomePageNavbar } from '../../components/HomePageNavbar/HomePageNavbar';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { MainFooter } from '../../components/MainFooter/MainFooter';

export function ClientHomePage() {
	function search(data) {
		console.log(`Kliknięto wyszukiwanie: ${data}`);
	}
	return (
		<section className="client_home_page">
			<HomePageNavbar />

			<section className="hero">
				<div className="content">
					<div className="text_wrap">
						<h2>Znajdź Idealną Usługę lub Salon</h2>
						<p>
							Wpisz nazwę usługi lub salonu i znajdź idealną opcję dla siebie w
							mgnieniu oka. Prosto, szybko i wygodnie!
						</p>
					</div>

					<SearchInput
						inputPlaceholder={'Szukaj usług lub salonów'}
						clickBtn={search}
					/>

					<button className="add_buissnes_btn">Dodaj swój biznes</button>
				</div>
			</section>

			<section className="info_wrap">
				<div className="content">
					<TextAndImage
						title={'Zarezerwuj wizytę bez stresu!'}
						text={
							'Nasza platforma umożliwia szybkie i łatwe rezerwacje terminów wizyt online. Oszczędź swój czas i uniknij zbędnego stresu związanego z telefonowaniem czy staniem w kolejce. Teraz umówisz się na wizytę w zaledwie kilka kliknięć!'
						}
					/>
					<TextAndImage
						title={'Twój harmonogram, twoja kontrola!'}
						text={
							'Dzięki naszej stronie możesz mieć pełną kontrolę nad swoim harmonogramem wizyt. Wybieraj dogodne dla siebie terminy, rezerwuj spotkania online i otrzymuj powiadomienia, abyś nigdy nie zapomniał o swoich ważnych spotkaniach. Zarządzaj swoim czasem w prosty i skuteczny sposób!'
						}
						reverse={true}
					/>
					<TextAndImage
						title={'Znajdź swój idealny termin'}
						text={
							'Poszukujesz idealnego terminu wizyty? Nasza platforma to rozwiązanie! Dzięki naszemu intuicyjnemu systemowi wyszukiwania znajdziesz wolne terminy, które idealnie wpasują się w twój harmonogram. Nie trać czasu na dzwonienie czy wyszukiwanie dostępnych terminów - teraz wszystko możesz załatwić online!'
						}
					/>
				</div>
			</section>

			<MainFooter />
		</section>
	);
}

function TextAndImage({ title, text, reverse }) {
	return (
		<article
			className={reverse ? 'text_and_image_wrap reverse' : 'text_and_image_wrap'}
		>
			<div className="image_wrap"></div>
			<div className="text_wrap">
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</article>
	);
}

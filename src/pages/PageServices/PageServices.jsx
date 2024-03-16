import { useEffect, useState } from 'react';
import './PagesServices.scss';

import { api } from '../../../config';

// components
import { Navbar } from '../../components/Navbar/Navbar';

import axios from 'axios';

export function PageServices() {
	const [sercicesData, setServicesData] = useState([]);

	useEffect(() => {
		axios
			.get(`${api}/get/products`)
			.then((response) => setServicesData(response.data))
			.catch((error) => console.error(`Błąd pobierania danych: ${error}`));
	}, []);

	return (
		<div className="page_services">
			<Navbar text={'Dostępne usługi'} />

			<div className="services_list">
				{sercicesData.map((item) => (
					<div
						key={item.id_uslugi}
						className="service_box"
					>
						<div className="left">
							<h4 className="title">{item.nazwa}</h4>
							<h4 className="description">{item.opis}</h4>
							<button className="save">Umów się</button>
						</div>
						<div className="right">
							<h4 className="price">
								{item.cena}zł {item.cena_plus == 1 ? '+' : ''}
							</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

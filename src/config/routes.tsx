import Homepage from '../pages/Homepage/Homepage';
import NewsPage from '../pages/News/NewsPage';
import { Route } from '../types/Route';
import HomeIcon from '@mui/icons-material/Home';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';

function getCountries(lang = 'en') {
	const A = 65;
	const Z = 90;
	const countryName = new Intl.DisplayNames([lang], { type: 'region' });
	const countries = [];
	for (let i = A; i <= Z; ++i) {
		for (let j = A; j <= Z; ++j) {
			let code = String.fromCharCode(i) + String.fromCharCode(j);
			let name = countryName.of(code);
			if (code !== name) {
				countries[code] = name;
			}
		}
	}
	return countries;
}

const countryRoutes: Array<Route> = Object.entries(getCountries()).map((countryCode) => {
	return {
		key: countryCode[0],
		title: countryCode[1],
		description: countryCode[1],
		component: NewsPage,
		path: `/country/${countryCode[0]}`,
		isEnabled: true,
		icon: countryCode[0],
	};
});

const routes: Array<Route> = [
	{
		key: 'home',
		title: 'Home',
		description: 'Home',
		component: Homepage,
		path: '/',
		isEnabled: true,
		icon: HomeIcon,
	},
	{
		key: 'country',
		title: 'Country',
		description: 'Country',
		component: NewsPage,
		isEnabled: true,
		icon: FlagCircleIcon,
		subRoutes: countryRoutes,
	},
];

export default routes;

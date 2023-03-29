import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from './components/Layout';

import { ThemeModeContext } from './contexts';
import { routes } from './config';
import { Route as AppRoute } from './types';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotFoundPage } from './pages/NotFoundPage';
import { ErrorFallback } from './components/ErrorFallback/Errorfallback';
import NewsPage from './pages/News/NewsPage';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
	const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME);

	const themeMode = useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
			},
		}),
		[]
	);

	//@ts-ignore
	const theme = useMemo(() => getAppTheme(mode), [mode]);

	const addRoute = (route: AppRoute) => {
		return <Route key={route.key} path={route.path} component={route.component} exact />;
	};

	return (
		<Provider store={store}>
			<ThemeModeContext.Provider value={themeMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<Layout>
							{/* <ErrorFallback> */}
							<Switch>
								{routes.map((route: AppRoute) => addRoute(route))}
								<Route component={NotFoundPage} />
							</Switch>
							{/* </ErrorFallback> */}
						</Layout>
					</Router>
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</Provider>
	);
}

export default App;

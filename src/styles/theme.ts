import { createTheme, responsiveFontSizes } from '@mui/material';

import { colors } from './colors';
import { darkPallete } from './pallete';
import typography from './typography';

export const getAppTheme = () => {
	let theme = createTheme({
		typography: typography,
		palette: darkPallete,
		components: {
			MuiCssBaseline: {
				styleOverrides: {
					body: {
						backgroundColor: '#1B191F',
						backgroundImage: '#1B191F',
					},
				},
			},
			MuiContainer: {
				defaultProps: {
					maxWidth: 'xl',
					fixed: true,
				},
			},
			MuiButton: {
				styleOverrides: {
					contained: {
						color: '#FFFFFF',
						textTransform: 'none',
					},
				},
			},
			MuiDrawer: {
				styleOverrides: {
					paper: {
						backgroundColor: colors.darkGrey,
						backdropFilter: 'blur(100px)',
					},
				},
			},
		},
		breakpoints: {
			values: {
				xs: 0,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	});
	theme = responsiveFontSizes(theme);
	return theme;
};

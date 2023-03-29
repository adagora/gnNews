import React from 'react';
import { TypographyOptions } from '@mui/material/styles/createTypography';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		'h1-bold': React.CSSProperties;

		'body1-bold': React.CSSProperties;

		'subtitle2-bold': React.CSSProperties;

		'body2-bold': React.CSSProperties;
		'body2-light': React.CSSProperties;
	}

	// allow configuration using `createTheme`
	interface TypographyVariantsOptions {
		'h1-bold'?: React.CSSProperties;

		'subtitle2-bold'?: React.CSSProperties;
		subtitle3: React.CSSProperties;

		'body1-bold'?: React.CSSProperties;

		'body2-bold'?: React.CSSProperties;
		'body2-light'?: React.CSSProperties;
	}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		'h1-bold': true;

		'subtitle2-bold': true;
		subtitle3: true;

		'body1-bold': true;
		'body2-bold': true;
		'body2-light': true;
	}
}

const header = (desktop: number, mobile: number, font: string, weight: number, lineHeight?: number) => ({
	fontSize: desktop,
	fontWeight: weight,
	lineHeight: lineHeight || 1.8,
	fontFamily: [font, 'Robot', 'Open Sans', 'sans-serif'].join(','),
	fontStyle: 'normal',
	'@media (max-width: 400px)': {
		fontSize: mobile,
		lineHeight: 1.2,
	},
});

const body = (desktop: number, mobile: number, font: string, weight: number, lineHeight?: number) => ({
	fontSize: desktop,
	fontWeight: weight,
	fontFamily: [font, 'Robot', 'Open Sans', 'sans-serif'].join(','),
	lineHeight: lineHeight || 1.2,
	fontStyle: 'normal',
	'@media (max-width: 400px)': {
		fontSize: mobile,
		lineHeight: 1,
	},
});

const typography: TypographyOptions = {
	fontFamily: ['Poppins', 'Commissioner', 'Robot', '"Open Sans"', 'sans-serif'].join(','),

	h1: header(24, 24, 'Poppins', 400),
	'h1-bold': header(20, 20, 'Poppins', 600),
	h2: header(16, 16, 'Poppins', 400, 1.3),
	h3: header(12, 12, 'Poppins', 400, 1),

	subtitle1: header(32, 32, 'Poppins', 400, 2.2),
	subtitle2: body(12, 12, 'Poppins', 400, 1.8),
	'subtitle2-bold': body(12, 12, 'Poppins', 500, 1.8),
	subtitle3: body(14, 14, 'Poppins', 400, 1.8),

	body1: body(10, 10, 'Poppins', 400, 1.2),
	'body1-bold': body(10, 10, 'Poppins', 500, 1.2),
	body2: body(8, 10, 'Poppins', 400, 1),
	'body2-bold': body(8, 10, 'Poppins', 600, 1.2),
	'body2-light': body(8, 10, 'Poppins', 300, 1.2),
};

export default typography;

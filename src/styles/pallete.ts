import { Palette, PaletteOptions } from '@mui/material';
import { colors } from './colors';

interface ExtendedPalette extends PaletteOptions {
	buttons: {
		default: {
			basic: {
				background: string;
				text: string;
				border: string;
			};
			hover: {
				background: string;
				text: string;
				border: string;
			};
			disabled: {
				background: string;
				text: string;
				border: string;
			};
		};
		secondary: {
			basic: {
				background: string;
				text: string;
				border: string;
			};
			hover: {
				background: string;
				text: string;
				border: string;
			};
			disabled: {
				background: string;
				text: string;
				border: string;
			};
		};
		download: {
			basic: {
				background: string;
				text: string;
				border: string;
			};
			hover: {
				background: string;
				text: string;
				border: string;
			};
			disabled: {
				background: string;
				text: string;
				border: string;
			};
		};
		share: {
			basic: {
				background: string;
				text: string;
				border: string;
			};
			hover: {
				background: string;
				text: string;
				border: string;
			};
			disabled: {
				background: string;
				text: string;
				border: string;
			};
		};
	};
}
//Palette is more strict than PaletteOptions interface
export const darkPallete: ExtendedPalette = {
	background: {
		default: colors.black,
		paper: colors.darkGrey,
	},
	primary: {
		main: colors.primary,
		light: colors.successLight,
		dark: colors.successDark,
		contrastText: '',
	},
	secondary: {
		main: colors.red,
		light: colors.errorLight,
		dark: colors.errorDark,
		contrastText: '',
	},
	buttons: {
		default: {
			basic: {
				background: colors.primary,
				text: colors.default,
				border: 'transparent',
			},
			hover: {
				background: colors.successLight,
				text: colors.default,
				border: 'transparent',
			},
			disabled: {
				background: colors.lightGrey,
				text: colors.white,
				border: 'transparent',
			},
		},
		secondary: {
			basic: {
				background: colors.red,
				text: colors.default,
				border: 'transparent',
			},
			hover: {
				background: colors.errorLight,
				text: colors.default,
				border: 'transparent',
			},
			disabled: {
				background: colors.lightGrey,
				text: colors.white,
				border: 'transparent',
			},
		},
		download: {
			basic: {
				background: colors.pineGreen,
				text: colors.light,
				border: 'transparent',
			},
			hover: {
				background: colors.pineGreenLight,
				text: colors.light,
				border: 'transparent',
			},
			disabled: {
				background: colors.lightGrey,
				text: colors.white,
				border: 'transparent',
			},
		},
		share: {
			basic: {
				background: colors.paco,
				text: colors.light,
				border: 'transparent',
			},
			hover: {
				background: colors.pacoLight,
				text: colors.light,
				border: 'transparent',
			},
			disabled: {
				background: colors.lightGrey,
				text: colors.white,
				border: 'transparent',
			},
		},
	},
	text: {
		primary: colors.white,
		secondary: colors.lightGrey,
		disabled: colors.defaultLight,
	},
	error: {
		main: colors.red,
		light: colors.errorLight,
		dark: colors.errorDark,
		contrastText: '',
	},
	// success: {
	// 	main: colors.col2,
	// },
};

export const lightPallete = {
	background: {
		default: colors.white,
	},
	text: {
		primary: colors.black,
		secondary: colors.default,
	},
	primary: {
		main: colors.primary,
	},
	secondary: {
		main: colors.darkGrey,
	},
};

import { Drawer as MuiDrawer, styled } from '@mui/material';
import { Routes } from './Routes';
import { DRAWER_WIDTH } from '../../utils/constants';
import { navClosedMixin, navOpenedMixin } from '../../styles/mixins';
import { AppTitle } from '../Header/AppTitle';

export interface NavigationProps {
	open: boolean;
	toggleNavigation: (e) => void;
	onKeyDown: (e) => void;
}

export const Navigation = ({ open, toggleNavigation, onKeyDown }: NavigationProps) => {
	return (
		<>
			<Drawer
				onMouseEnter={toggleNavigation}
				onMouseLeave={toggleNavigation}
				variant='permanent'
				open={open}
				onKeyDown={onKeyDown}>
				<DrawerHeader>
					<AppTitle open={open} />
				</DrawerHeader>

				<Routes open={open} />
			</Drawer>
		</>
	);
};

const DrawerHeader = styled('div')(({ theme }) => ({
	...theme.mixins.toolbar,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '0 18px',
	borderBottom: '1px solid #404643',
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) =>
		({
			width: DRAWER_WIDTH,
			flexShrink: 0,
			whiteSpace: 'nowrap',
			boxSizing: 'border-box',
			...(open && {
				...navOpenedMixin(theme),
				'& .MuiDrawer-paper': navOpenedMixin(theme),
				position: 'absolute',
			}),
			...(!open && {
				...navClosedMixin(theme),
				'& .MuiDrawer-paper': navClosedMixin(theme),
			}),
			// TODO any type because error
		} as any)
);

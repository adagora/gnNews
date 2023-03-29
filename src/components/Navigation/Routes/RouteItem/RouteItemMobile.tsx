/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Icon, IconButton, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { colors } from '../../../../styles/colors';

import { Route } from '../../../../types';
import Flag from 'react-world-flags';
import FlagIcon from '@mui/icons-material/Flag';

interface RouteItemMobileProps {
	route: Route;
	nested?: boolean;
	hasChildren?: boolean;
	handleMenuClick?: (route: Route) => void;
}

export const RouteItemMobile = ({
	route,
	nested = false,
	hasChildren = false,
	handleMenuClick = () => {},
}: RouteItemMobileProps) => {
	const location = useLocation();
	const theme = useTheme();

	const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		if (!route.isEnabled || hasChildren) e.preventDefault();
	};

	const isSelected =
		location.pathname === route.path || (hasChildren && route.subRoutes?.some((e) => location.pathname === e.path));

	const item = (
		<ListItemButton
			css={css`
				pl: ${nested ? 3 : 1};
				cursor: ${!route.isEnabled ? 'not-allowed' : 'auto'};
				color: ${!route.isEnabled ? theme.palette.text.secondary : 'auto'};
				flex-direction: column;
				display: flex;
			`}
			onClick={() => handleMenuClick(route)}>
			<ListItemIcon sx={{ justifyContent: 'center' }}>
				<IconButton
					size='small'
					css={css`
						transition: 'box-shadow 0.1s';
						color: ${theme.palette.text.primary};
					`}>
					{typeof route.icon === 'string' ? (
						<Flag code={route.icon} width='20x' fallback={<FlagIcon color='primary' />} />
					) : (
						<Icon component={route.icon} color={isSelected ? 'primary' : 'inherit'} fontSize='medium' />
					)}
				</IconButton>
			</ListItemIcon>
			<ListItemText
				primary={route.title}
				primaryTypographyProps={{ color: `${isSelected && colors.primary}` }}
				sx={{
					cursor: 'pointer',
					fontSize: '14px',
					lineHeight: '21px',
					fontWeight: 400,
					fontFamily: 'Poppins',
					color: '#adadad',
				}}
			/>
		</ListItemButton>
	);

	return (
		<NavLink
			to={`${route.path}`}
			key={route.key}
			onClick={handleNavigate}
			css={css`
				text-decoration: none;
				color: inherit;
			`}>
			{item}
		</NavLink>
	);
};

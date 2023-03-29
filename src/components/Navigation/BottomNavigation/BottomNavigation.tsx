import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import { RoutesMobile } from '../Routes';

export default function LabelBottomNavigation() {
	return (
		<BottomNavigation
			sx={{
				width: '100%',
				height: 90,
				borderTop: '1px solid #404643',
				backgroundColor: '#1B191F',
				overflowX: 'auto',
			}}>
			<RoutesMobile />
		</BottomNavigation>
	);
}

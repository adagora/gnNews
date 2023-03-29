import { useState } from 'react';
import { List } from '@mui/material';
import { routes } from '../../../config';
import { Route } from '../../../types';
import { RouteItemMobile } from './RouteItem/RouteItemMobile';
import { Modal } from '../../Modal';

export const RoutesMobile = () => {
	const [routesState, setRoutesStage] = useState<Route[]>(routes);
	const [open, setOpen] = useState(false);

	const handleMenuClick = (route: Route) => {
		const items = routesState.map((item) => {
			if (item.key === route.key) {
				item.expanded = !item.expanded;
			}

			return item;
		});
		setRoutesStage(items);
		setOpen(true);
	};

	return (
		<List component='nav' sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
			{routesState.map((route: Route) => (
				<div key={route.key} style={{ width: '200px' }}>
					{route.subRoutes ? (
						<>
							<RouteItemMobile key={`${route.key}`} route={route} hasChildren handleMenuClick={handleMenuClick} />
							<Modal isOpen={open} handleClose={() => setOpen(false)}>
								<List component='div' disablePadding>
									{route.subRoutes.map((sRoute: Route) => (
										<RouteItemMobile key={`${sRoute.key}`} route={sRoute} nested />
									))}
								</List>
							</Modal>
						</>
					) : (
						<RouteItemMobile key={route.key} route={route} nested={false} />
					)}
				</div>
			))}
		</List>
	);
};

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { FC, useCallback, useState } from 'react';

import _ from 'lodash';

import { Box } from '@mui/material';
import { Navigation } from '../Navigation';
import { Footer } from '../Footer';
import { FOOTER_HEIGHT } from '../../utils/constants';
import { Header } from '../Header';
import LabelBottomNavigation from '../Navigation/BottomNavigation/BottomNavigation';
import useIsMobile from '../../hooks/useIsMobile';
import useWindowSize from '../../hooks/useWindowSize';

interface LayoutProps {
	children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
	const [open, setOpen] = useState(false);

	const HoverEvent = useCallback(
		(event: React.KeyboardEvent) => {
			if (event.key === 'Tab' || event.key === 'Shift') {
				return;
			}

			setOpen((status) => !status);
		},
		[setOpen]
	);

	const isMobileMedium = useIsMobile('md');

	const { width } = useWindowSize();

	return (
		<div
			css={css`
				min-height: 100vh;
			`}>
			<div
				css={css`
					display: flex;
					min-height: calc(100vh - ${FOOTER_HEIGHT}px);
				`}>
				<Box component='header'>
					<Header />
				</Box>

				<Box
					component='main'
					sx={{ width: width, flexGrow: 1, p: 2, pt: 10, pl: !isMobileMedium ? 10 : 2, position: 'relative' }}>
					{!isMobileMedium && <Navigation toggleNavigation={HoverEvent} open={open} onKeyDown={HoverEvent} />}
					{children}
				</Box>
			</div>
			{isMobileMedium && <LabelBottomNavigation />}
			{!isMobileMedium && (
				<Box component='footer'>
					<Footer />
				</Box>
			)}
		</div>
	);
};

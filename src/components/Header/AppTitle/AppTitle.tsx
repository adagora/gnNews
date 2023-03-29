/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';

interface AppTitleProps {
	open: boolean;
}

export const AppTitle = ({ open }: AppTitleProps) => (
	<NavLink
		to='/'
		css={css`
			text-decoration: none;
			color: inherit;
			margin-left: ${!open ? '-0.3rem' : 0};
		`}>
		{open ? (
			<div
				css={css`
					display: flex;
					align-items: center;
					width: 100%;
				`}>
				<img src={logo} alt='logo' width='33px' height='27px' />
				{` `}
				<span
					css={css`
						font-size: 1rem;
						font-weight: 500;
						font-family: Poppins, sans-serif;
						width: 250px;
						padding-left: 0.5rem;
						color: #737474;
					`}>
					News Aggregator
				</span>
			</div>
		) : (
			<img src={logo} alt='logo' width='33px' height='27px' />
		)}
	</NavLink>
);

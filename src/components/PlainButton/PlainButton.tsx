import { FC, forwardRef, ReactNode } from 'react';
import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import { CircleLoader } from '../CircleLoader';
import styled from '@emotion/styled';

export interface PlainButtonProps extends ButtonProps {
	children: ReactNode;
	fullWidth?: boolean;
	isLoading?: boolean;
}

const StyledPlainButton = styled(Button)<PlainButtonProps>`
	width: 100%;
	height: 100%;
	min-width: 0;
	text-transform: none;
	text-decoration: none;
	padding: 2px;
	border-radius: 4px;
	transition: background 250ms ease-in-out;
`;

// eslint-disable-next-line react/display-name
export const PlainButton: FC<PlainButtonProps> = forwardRef((props, ref) => {
	const { children, variant, size, fullWidth, disabled, isLoading, ...rest } = props;

	return (
		<StyledPlainButton variant={variant} size={size} fullWidth={fullWidth} disabled={disabled} {...rest} ref={ref}>
			{isLoading ? (
				<Box display='flex' alignItems='center'>
					<Box display='flex' alignItems='center' mr={2}>
						<CircleLoader size={20} />
					</Box>
					Processing...
				</Box>
			) : (
				children
			)}
		</StyledPlainButton>
	);
});

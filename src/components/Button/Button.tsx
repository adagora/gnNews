import React, { FC, forwardRef, ReactNode } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';
import { CircleLoader } from '../CircleLoader';
import { Theme } from '@mui/system';
import { useTheme } from '@mui/system';

type Variant = 'secondary' | 'default';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		default: true;
		secondary: true;
		download: true;
		share: true;
	}
}

export interface IButtonProps extends ButtonProps {
	children: ReactNode;
	variant?: ButtonProps['variant'] | Variant;
	fullWidth?: boolean;
	isLoading?: boolean;
}

const sizeStyles = ({ size }: IButtonProps) => {
	switch (size) {
		case 'small':
			return css`
				padding: 8px;
				font-weight: 500;
				font-size: 13px;
				line-height: 19px;
			`;
		case 'large':
			return css`
				padding: 10.5px 16px;
				font-size: 10px;
				line-height: 15px;
				font-weight: 500;
			`;
		default:
			return css`
				padding: 8px 12px;
				font-size: 14px;
				line-height: 21px;
			`;
	}
};

const borderVariantStyles = ({ theme, variant }: IButtonProps & { theme: Theme }) => {
	const { basic, hover, disabled } = theme.palette.buttons[variant ?? 'default'];

	return css`
		background: ${basic.border};
		&:hover {
			background: ${hover.border};
		}
		&:disabled {
			background: ${disabled.border};
		}
	`;
};

const innerVariantStyles = ({ theme, variant }: IButtonProps & { theme: Theme }) => {
	const { basic, hover, disabled } = theme.palette.buttons[variant ?? 'default'];

	return css`
		background: ${basic.background};
		color: ${basic.text};
		&:hover {
			background: ${hover.background};
			color: ${hover.text};
		}
		&:disabled {
			background: ${disabled.background};
			color: ${disabled.text};
		}
	`;
};

const StyledAButton = styled(Button)`
	${borderVariantStyles};
	width: 100%;
	height: 100%;
	min-width: 0;
	font-weight: 500;
	text-transform: none;
	padding: 2px;
	border-radius: 20px;
	transition: background 250ms ease-in-out;
	&:disabled {
		// ??cursor not working
		cursor: not-allowed;
		opacity: 0.8;
	}
`;

const InnerButton = styled.div`
	${innerVariantStyles};
	${sizeStyles};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	transition: background 250ms ease-in-out;
`;

// eslint-disable-next-line react/display-name
export const AButton: FC<IButtonProps> = forwardRef((props, ref) => {
	const { children, variant, size, fullWidth, disabled, isLoading, style, ...rest } = props;

	const theme = useTheme();
	return (
		<StyledAButton
			variant={variant}
			size={size}
			fullWidth={fullWidth}
			disabled={disabled}
			{...rest}
			ref={ref}
			theme={theme}>
			<InnerButton variant={variant} size={size} fullWidth={fullWidth} theme={theme}>
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
			</InnerButton>
		</StyledAButton>
	);
});

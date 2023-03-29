import { Grid } from '@mui/material';
import React from 'react';
import LoadingOverlay, { LoadingOverlayProps } from 'react-loading-overlay';
import { colors } from '../../styles/colors';
import { CircleLoader } from '../CircleLoader';

interface OverlayProps extends LoadingOverlayProps {
	/**
	 * Enable or disable overlay. Props attached to boolean operations from e.g isLoading, isFetching.
	 */
	show?: boolean;
	/**
	 * Components that will be overlayed.
	 */
	children?: React.ReactNode;
	/**
	 * Overlay color in Hexadecimal format.
	 */
	overlayColor?: string;
	/**
	 * Transparency setting.
	 */
	overlayOpacity?: number;
	/**
	 * Title text.
	 */
	primaryText?: string;
	/**
	 * Color of title text.
	 */
	colorPrimaryText?: string;
	/**
	 * Color applied to currently displayed component.
	 */
	colorComponent?: string;
	/**
	 * Currently displayed component.
	 */
	customComponent?: JSX.Element;
	/**
	 * Disable the currently displayed component.
	 */
	disableCustomComponent?: boolean;
	/**
	 * Disable overlay. You need still play with blur and opacity of children.
	 */
	disableOverlay?: boolean;
	/**
	 * Set up transparency of children.
	 */
	opacityChildren?: string;
	/**
	 * Set up blur of children.
	 */
	blurChildren?: any;
	/**
	 * @param overrideMuiStyles - overrides material ui styles
	 */
	overrideMuiStyles?: any;
	/**
	 * Pass className to LoadingOverlay internal component
	 */
	className?: any;
	/**
	 * Pass onClick method to LoadingOverlay internal component
	 */
	onClick?: any;
}

export const Overlay = (props: OverlayProps): JSX.Element => {
	const {
		show = false,
		primaryText = 'Loading...',
		colorPrimaryText = colors.lightGrey,
		disableCustomComponent = false,
		disableOverlay = true,
		colorComponent = colors.primary,
		overlayOpacity = 0.3,
		overlayColor = '#14171a',
		opacityChildren = '30%',
		blurChildren = 'blur(3px)',
	} = props;

	const defaultComponent = !disableCustomComponent && <CircleLoader size={100} />;

	function hexToRgb(hex: string): any {
		const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		if (result) {
			return {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
			};
		}
		return {};
	}

	let rgbOverlayColor: any = {};
	if (overlayColor) {
		rgbOverlayColor = hexToRgb(overlayColor);
	}

	return (
		<LoadingOverlay
			active={show}
			fadeSpeed={200}
			className={props.className}
			onClick={props.onClick}
			spinner={
				<Grid container justifyContent='center' style={{ color: colorComponent }} alignItems='center'>
					{props.customComponent || defaultComponent}
				</Grid>
			}
			text={
				<Grid
					className='overlay-primaryText'
					container
					item
					justifyContent='center'
					style={{ marginTop: '10px', color: colorPrimaryText }}>
					{!disableCustomComponent ? primaryText : ''}
				</Grid>
			}
			styles={{
				overlay: (base) => ({
					...base,
					backgroundColor: `rgba(
                ${rgbOverlayColor?.r},
                ${rgbOverlayColor?.g},
                ${rgbOverlayColor.b},
                ${disableOverlay ? '0%' : overlayOpacity}
                )`,
				}),
			}}>
			<Grid style={show ? { opacity: opacityChildren, filter: blurChildren } : {}}>{props.children}</Grid>
		</LoadingOverlay>
	);
};

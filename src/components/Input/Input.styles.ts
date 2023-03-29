import { styled } from '@mui/system';

export const InputOuterContainer = styled('div')`
	width: 100%;
	font-family: 'Poppins', sans-serif;
`;

export const InputMainContainer = styled('div')`
	border-radius: 4px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	overflow: hidden;
	border: 2px solid #34313a;
	padding: 0;
`;

export const InputIcon = styled('div')`
	background-color: transparent;
	padding: 5px;
	display: flex;
	align-items: center;
	min-width: 65px;
	max-width: 80px;
	justify-content: center;
	flex-shrink: 0;
	flex-basis: 50px;
	box-sizing: border-box;
`;

export const InputRightContainer = styled('div')`
	background-color: transparent;
	flex-grow: 3;
	box-sizing: border-box;
`;

export const InputHeader = styled('div')`
	text-align: left;
	font-size: 0.75em;
	letter-spacing: 0px;
	color: #5a7681;
	padding-top: 4px;
	padding-bottom: 0;
`;

export const RightIcon = styled('div')`
	background-color: transparent;
	padding: 1px;
	flex-grow: 1;
	display: flex;
	align-items: center;
	min-width: 65px;
	max-width: 80px;
	justify-content: center;
	flex-shrink: 0;
	flex-basis: 50px;
	box-sizing: border-box;
	&:hover {
		cursor: pointer;
	}
`;
export const InputTextField = styled('div')`
	padding-bottom: 4px;
`;

export const InputNoIcon = styled('div')`
	padding-left: 16px;
`;

export const InputMessages = styled('div')`
	display: flex;
	justify-content: flex-start;
	// padding: 12px;
	font-size: 0.75em;
`;

export const InputErrorMessage = styled('div')`
	padding: 6px;
	color: #7e1601;
	font-size: 1em;
	font-weight: 500;
`;

export const InputRequired = styled('span')`
	color: #7e1601';
`;

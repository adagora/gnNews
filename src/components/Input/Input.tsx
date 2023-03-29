import React, { useState, useRef } from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/system';
import { PlainButton } from '../PlainButton';
import {
	InputErrorMessage,
	InputHeader,
	InputIcon,
	InputMainContainer,
	InputMessages,
	InputNoIcon,
	InputOuterContainer,
	InputRequired,
	InputRightContainer,
	InputTextField,
	RightIcon,
} from './Input.styles';

interface IconProps {
	src?: any;
	role?: string;
	tooltipMessage?: string;
	text?: string;
}

/**
 * Properies of Input component
 */
export interface InputProps {
	/**
	 * @param autoFocus - MUI TextField autoFocus.
	 */
	autoFocus?: TextFieldProps['autoFocus'];
	/**
	 * @param autoComplete - MUI Textfield autoComplete.
	 */
	autoComplete?: TextFieldProps['autoComplete'];
	/**
	 * @param customStyles - Object for style overrides.
	 */
	customStyles?: InputCustomStylesProps;
	/**
	 * @param disabled - MUI Textfield disabled.
	 */
	disabled?: TextFieldProps['disabled'];
	/**
	 * @param error - flag for setting error stylings on.
	 */
	error?: boolean;
	/**
	 * @param errorMessage - message displayed on the bottom of component, to be used as form error messages.
	 */
	errorMessage?: string;
	/**
	 * @param icon - FontAwesome icon to be placed on left side of component.
	 * @type IconProps
	 */
	icon?: IconProps | any;
	/**
	 * @param id - MUI Textfield id.
	 */
	id?: TextFieldProps['id'];
	/**
	 * @param inputRef - MUI Textfield inputRef.
	 */
	inputRef?: TextFieldProps['inputRef'];
	/**
	 * @param header - Input header label.
	 */
	header?: string;
	/**
	 * @param maxLength - Max length of text
	 */
	maxLength?: number;
	/**
	 * @param multiline - MUI TextField multiline.
	 */
	multiline?: TextFieldProps['multiline'];
	/**
	 * @param name - MUI TextField name
	 */
	name?: TextFieldProps['name'];
	/**
	 * @param onChange - MUI Textfield onChange
	 */
	onChange?: TextFieldProps['onChange'];
	/**
	 * @param onFocus - MUI Textfield onFocus
	 */
	onFocus?: TextFieldProps['onFocus'];
	/**
	 * @param onBlur - MUI Textfield onBlur
	 */
	onBlur?: TextFieldProps['onBlur'];
	/**
	 * @param onClick - MUI TextField onClick
	 */
	onClick?: TextFieldProps['onClick'];
	/**
	 * @param placeholder - MUI Textfield placeholder.
	 */
	placeholder?: TextFieldProps['placeholder'];
	/**
	 * @param required - MUI Textfield required.
	 */
	required?: boolean;
	/**
	 * @param rightIcon - icon to be placed on right side of component with pointer: cursor and onClick event.
	 */
	rightIcon?: IconProps;
	/**
	 * @param leftIconOnClick - function called on right icon click
	 */
	leftIconOnClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	/**
	 * @param rows - MUI Textfield rows.
	 */
	rows?: TextFieldProps['rows'];
	/**
	 * @param tooltipMessage - Message to display in additional tooltip button at right side of Input.
	 */
	tooltipMessage?: string;
	/**
	 * @param type - MUI Textfield type.
	 */
	type?: TextFieldProps['type'];
	/**
	 * @param value - MUI Textfield value.
	 */
	value?: string | number | readonly string[] | undefined;
	/**
	 * @param trimSpacesFromPastedValue - trimming pasted value
	 */
	trimSpacesFromPastedValue?: boolean;
}

/**
 * Properties of customStyles object for styles overriding
 */
export interface InputCustomStylesProps {
	/**
	 * @param headerStyles - additional styling for header.
	 */
	headerStyles?: Record<string, unknown>;
	/**
	 * @param inputColor - font color for input.
	 */
	inputColor?: string;
	/**
	 * @param borderOnFocus - border when input is focused. For example `1px solid blue`.
	 */
	borderOnFocus?: string;
	backgroundColor?: string;
	borderRadius?: string;
}

const StyledTextField = styled(TextField)({
	margin: 0,
	'& underline': {
		'&&:before': {
			borderBottom: 'none',
			content: 'none',
		},
		'&&:after': {
			borderBottom: 'none',
		},
	},
	'& input': {
		padding: '0.313rem 0.5rem',
		fontSize: '1em',
		fontWeight: 500,
		color: '#fff',
		letterSpacing: '1px',
		minHeight: '28px',
	},

	'& .MuiInputBase-input::placeholder': {
		color: '#fff',
		opacity: 0.5,
	},
});

export const Input = ({
	icon,
	header,
	placeholder,
	error,
	customStyles: {
		inputColor = undefined,
		headerStyles = undefined,
		borderOnFocus = undefined,
		backgroundColor = undefined,
	} = {},
	autoFocus,
	autoComplete,
	disabled,
	id,
	inputRef,
	errorMessage,
	maxLength,
	multiline,
	name,
	onChange,
	onFocus,
	onBlur,
	onClick,
	required,
	rightIcon,
	leftIconOnClick,
	rows,
	type,
	value,
	trimSpacesFromPastedValue,
}: InputProps): JSX.Element => {
	const textAreaRef = useRef<HTMLInputElement | null>(null);
	const [isFocused, setIsFocused] = useState(false);

	const focusTextArea = (): void => {
		if (inputRef && typeof inputRef !== 'function' && (inputRef as any).current) {
			(inputRef as any).current.focus();
		} else if (textAreaRef && textAreaRef.current) {
			textAreaRef.current.focus();
		}
	};

	return (
		<InputOuterContainer>
			<InputMainContainer
				style={{
					border: error ? '2px solid #7e1601' : isFocused ? borderOnFocus : '2px solid #34313A',
					background: backgroundColor,
				}}
				onFocus={() => {
					setIsFocused(true);
				}}
				onBlur={() => {
					setIsFocused(false);
				}}>
				{icon ? (
					<InputIcon role='link' onClick={leftIconOnClick}>
						{icon ? icon : <span />}
					</InputIcon>
				) : (
					<InputNoIcon />
				)}
				<InputRightContainer>
					<InputHeader
						style={error ? { ...headerStyles, color: '#7e1601' } : headerStyles}
						onClick={focusTextArea}
						role='link'>
						{header}
						{required && <InputRequired>*</InputRequired>}
					</InputHeader>
					<InputTextField>
						<StyledTextField
							sx={{ color: inputColor }}
							placeholder={placeholder}
							fullWidth
							margin='normal'
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{
								disableUnderline: true,
							}}
							// eslint-disable-next-line react/jsx-no-duplicate-props
							inputProps={{
								maxLength,
							}}
							// eslint-disable-next-line jsx-a11y/no-autofocus
							autoFocus={autoFocus}
							autoComplete={autoComplete}
							disabled={disabled}
							id={id}
							inputRef={
								inputRef && typeof inputRef === 'function'
									? (ref: HTMLInputElement | null) => {
											inputRef(ref);
											textAreaRef.current = ref;
									  }
									: inputRef || textAreaRef
							}
							multiline={multiline}
							name={name}
							rows={rows}
							variant='standard'
							type={type}
							value={value}
							onChange={(e: any) => {
								if (e.nativeEvent.inputType === 'insertFromPaste') {
									if (trimSpacesFromPastedValue) {
										if (e) {
											// eslint-disable-next-line no-param-reassign
											e.target.value = e.target.value.replace(/ /g, '');
										}
									}
								}
								if (onChange) {
									onChange(e);
								}
							}}
							onFocus={onFocus}
							onBlur={onBlur}
							onClick={onClick}
						/>
					</InputTextField>
				</InputRightContainer>
				{rightIcon ? (
					<RightIcon onClick={focusTextArea} role={rightIcon.role ? rightIcon.role : 'link'}>
						{rightIcon?.text ? <span>{rightIcon?.text}</span> : <span />}
					</RightIcon>
				) : (
					<div />
				)}
			</InputMainContainer>

			<InputMessages
				style={{
					display: errorMessage ? 'flex' : 'none',
					justifyContent: errorMessage ? 'space-between' : errorMessage ? 'flex-start' : 'flex-end',
				}}>
				{errorMessage && <InputErrorMessage>{errorMessage}</InputErrorMessage>}
			</InputMessages>
		</InputOuterContainer>
	);
};

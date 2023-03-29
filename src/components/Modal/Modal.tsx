import { FC, ReactElement } from 'react';
import Box from '@mui/material/Box';
import Close from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { styled, SxProps } from '@mui/system';

interface ModalProps {
	id?: string;
	isOpen: boolean;
	handleClose: () => void;
	title?: string | ReactElement;
	children: ReactElement;
	className?: string;
	divider?: boolean;
	sx?: SxProps;
}

const StyledDialog = styled(Dialog)`
	& .MuiDialog-root {
		z-index: 30;
	}
	& .MuiDialog-paper {
		border-radius: 20px;
		margin: 0;
		background-color: ${({ theme }) => theme.palette.background.default};
		border: 1px solid rgba(52, 49, 58, 0.6);
	}
	& .MuiPaper-root {
		box-shadow: 0 0 25px -45px ${({ theme }) => theme.palette.text.primary};
	}
`;

const BlurryStyledDialog = {
	backdropFilter: 'blur(1px)',
};

const StyledIcon = styled(Close)`
	color: #737474;
	cursor: pointer;
`;

const StyledHeader = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 20px 0px 20px;
`;

const StyledBody = styled(Box)`
	padding: 0px;
`;

export const Modal: FC<ModalProps> = ({ className, isOpen, handleClose, title, children, sx }) => {
	return (
		<StyledDialog
			open={isOpen}
			onClose={handleClose}
			className={className}
			BackdropProps={{
				style: BlurryStyledDialog,
			}}
			sx={sx}>
			<StyledHeader>
				<Box display='flex' alignItems='center' justifyContent='center'>
					<Typography variant='h6'>{title}</Typography>
				</Box>
				<Box display='flex' alignItems='center'>
					<StyledIcon onClick={handleClose} />
				</Box>
			</StyledHeader>

			<StyledBody>{children}</StyledBody>
		</StyledDialog>
	);
};

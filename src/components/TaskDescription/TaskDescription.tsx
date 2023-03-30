import { useSelector, useDispatch } from 'react-redux';
import { IconButton, DialogContent, DialogActions, Button } from '@mui/material';
import { Modal } from '../Modal';
import { selectIsOpen, toggleOpen } from '../../redux/slices/popup';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ActionItem } from '../Actions/ActionItem';

export const TaskDescriptionIcon = () => {
	const dispatch = useDispatch();
	const isOpen = useSelector(selectIsOpen);

	const handleOpen = () => {
		dispatch(toggleOpen());
	};

	const handleClose = () => {
		dispatch(toggleOpen());
	};

	return (
		<>
			<ActionItem icon={AssignmentIcon} onClick={handleOpen} title='Task description' />
			<Modal isOpen={isOpen} handleClose={handleClose} title='Task'>
				<>
					<DialogContent>
						<p>The most difficult part of this task was...</p>- side menu with country list, it requires main and
						subroutes
						<p>The most fun part of this task was...</p>- working with fetching correct data by using RTK-query and
						manage them by Redux-toolkit, if there is img icon on the main card, icon should be displayed in the modal
						(I recommend you Australia, to check it out). Also, I haveve added a language switcher, which is working
						only on Homepage.
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Close</Button>
					</DialogActions>
				</>
			</Modal>
		</>
	);
};

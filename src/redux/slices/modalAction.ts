import { createSlice } from '@reduxjs/toolkit';

interface Props {
	author: string;
	url: string;
	urlToImage: string;
	description: string;
	content: string;
}
interface ModalActionProps {
	isOpen: boolean;
	content: Props;
}

interface StateProps {
	modalAction: ModalActionProps;
}

const initialState: ModalActionProps = {
	isOpen: false,
	content: {
		author: '',
		url: '',
		urlToImage: '',
		description: '',
		content: '',
	},
};

const modalActionSlice = createSlice({
	name: 'modalAction',
	initialState,
	reducers: {
		setOpen: (state, action) => {
			state.isOpen = action.payload;
		},
		setClose: () => initialState,
		setContent: (state, action) => {
			state.content = action.payload;
		},
	},
});

export const selectOpen = (state: StateProps) => state.modalAction.isOpen;
export const selectContent = (state: StateProps) => state.modalAction.content;

export const { setOpen, setClose, setContent } = modalActionSlice.actions;

export default modalActionSlice.reducer;

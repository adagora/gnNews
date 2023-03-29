import { createSlice } from '@reduxjs/toolkit';

interface ModalActionProps {
	isOpen: boolean;
	content: any;
}

interface StateProps {
	modalAction: ModalActionProps;
}

const initialState: ModalActionProps = {
	isOpen: false,
	content: {},
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

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
};

const popupSlice = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		toggleOpen: (state) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { toggleOpen } = popupSlice.actions;

export const selectIsOpen = (state) => state.popup.isOpen;

export default popupSlice.reducer;

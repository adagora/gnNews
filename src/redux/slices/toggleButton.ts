import { createSlice } from '@reduxjs/toolkit';

interface ModalActionProps {
	value: 'list' | 'module';
}

interface StateProps {
	toggleButton: ModalActionProps;
}

const initialState: ModalActionProps = {
	value: 'list',
};

const toggleButtonSlice = createSlice({
	name: 'toggleButton',
	initialState,
	reducers: {
		updateModule: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const selectValue = (state: StateProps) => state.toggleButton.value;

export const { updateModule } = toggleButtonSlice.actions;

export default toggleButtonSlice.reducer;

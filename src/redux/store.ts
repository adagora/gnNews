import { configureStore } from '@reduxjs/toolkit';

import modalActionReducer from './slices/modalAction';
import toggleButtonReducer from './slices/toggleButton';
import popupReducer from './slices/popup';
import { newsApiSlice } from './features/news/newsApi';

const store = configureStore({
	reducer: {
		modalAction: modalActionReducer,
		toggleButton: toggleButtonReducer,
		popup: popupReducer,
		[newsApiSlice.reducerPath]: newsApiSlice.reducer,
	},
	devTools: process.env.MODE !== 'production',
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApiSlice.middleware),
});

export type Store = ReturnType<typeof store.getState>;

export default store;

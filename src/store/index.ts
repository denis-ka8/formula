import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from '../api/news';

const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
			newsApi.middleware
		]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

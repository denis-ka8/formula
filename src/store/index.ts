import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../api/news";
import { scheduleApi } from "../api/schedule";

const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		[scheduleApi.reducerPath]: scheduleApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([newsApi.middleware, scheduleApi.middleware]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

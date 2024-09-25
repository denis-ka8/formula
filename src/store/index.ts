import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../api/news";
import { scheduleApi } from "../api/schedule";
import { driverApi } from "../api/driver";

const store = configureStore({
	reducer: {
		[newsApi.reducerPath]: newsApi.reducer,
		[scheduleApi.reducerPath]: scheduleApi.reducer,
		[driverApi.reducerPath]: driverApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([
			newsApi.middleware,
			scheduleApi.middleware,
			driverApi.middleware,
		]),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

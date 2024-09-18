import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./newsSlice";

const store = configureStore({
	reducer: {
		news: newsSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

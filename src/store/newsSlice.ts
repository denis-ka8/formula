import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { INews } from "../types/news";

interface INewsState {
	list: INews[];
	loading: boolean;
	error: string | null;
}

const initialState: INewsState = {
	list: [],
	loading: false,
	error: null,
};

export const fetchNews = createAsyncThunk<
	INews[],
	void,
	{ rejectValue: string }
>("api/news", async (_, thunkAPI) => {
	try {
		const response = await axios.get("/api/news");
		return response?.data;
	} catch (error) {
		thunkAPI.rejectWithValue("Failed to fetch posts");
	}
});

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchNews.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchNews.fulfilled, (state, action) => {
				state.loading = false;
				state.list = action.payload || [];
			})
			.addCase(fetchNews.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || "Something went wrong";
			});
	},
});

export default newsSlice.reducer;

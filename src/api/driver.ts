import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IDriverAddInfo } from "../types/driver";

export const driverApi = createApi({
	reducerPath: "driver",
	baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
	endpoints: (builder) => ({
		addDriver: builder.mutation<IDriverAddInfo, Partial<IDriverAddInfo>>({
			query: (body) => ({
				url: `driver/create`,
				method: "POST",
				body,
			}),
		}),
	}),
});

export const { useAddDriverMutation } = driverApi;

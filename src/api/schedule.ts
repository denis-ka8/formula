import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISchedule } from "../types/schedule";

export const scheduleApi = createApi({
	reducerPath: "schedule",
	baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
	endpoints: (builder) => ({
		getFullSchedule: builder.query<ISchedule[], void>({
			query: () => `schedule`,
		}),
		getUpcomingRounds: builder.query<ISchedule[], number | void>({
			query: (rounds) => `schedule?upcoming=${rounds ? rounds : "all"}`,
		}),
	}),
});

export const { useGetFullScheduleQuery, useGetUpcomingRoundsQuery } =
	scheduleApi;

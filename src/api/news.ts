import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { INews } from '../types/news';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getNews: builder.query<INews[], void>({
      query: () => `news`,
    }),
    // getNewsById: builder.query<INews, string>({
    //   query: (name) => `pokemon/${name}`,
    // }),
  }),
})

export const { useGetNewsQuery } = newsApi
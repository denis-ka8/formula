import { useEffect } from "react";
import { useGetNewsQuery } from "../../api/news";

export const useFetchNews = () => {
	const { data, error, isLoading } = useGetNewsQuery();

  if (error) return {data: []}
  if (isLoading) return {data: []}

	return { data };
};

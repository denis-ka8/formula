import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/hook";
import { fetchNews } from "../../store/newsSlice";

export const News: React.FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchNews());
	}, []);

	return null;
};

import { useFetchNews } from "./useFetchNews";
import { NewsShort } from "../../components/news/NewsShort";

export const News: React.FC = () => {
	const { data } = useFetchNews();

	if (!data) return null

	return (
		<div>
			{data.map((item) => (
				<NewsShort key={item.id} news={item} />
			))}
		</div>
	);
};

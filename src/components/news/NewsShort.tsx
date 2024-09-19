import { INews } from "../../types/news";

interface NewsShortProps {
	news: INews;
}

export const NewsShort: React.FC<NewsShortProps> = ({ news }) => {
	return (
		<div key={news.id}>
			<img src={news.image} alt={news.title} height="100" />
			<div>{news.title}</div>
			<div>{news.shortInfo}</div>
		</div>
	);
};

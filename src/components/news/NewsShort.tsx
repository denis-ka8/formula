import { INews } from "../../types/news";
import { NewsItem, NewsImage, NewsTitle, NewsInfo, NewsDate } from "./newsShort.styles";

interface NewsShortProps {
	news: INews;
}

export const NewsShort: React.FC<NewsShortProps> = ({ news }) => {
	return (
		<NewsItem key={news.id}>
			<NewsImage src={news.image} alt={news.title} />
			<NewsTitle>{news.title}</NewsTitle>
			<NewsInfo>{news.shortInfo}</NewsInfo>
			<NewsDate>{news.date}</NewsDate>
		</NewsItem>
	);
};

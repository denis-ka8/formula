import { useFetchNews } from "./useFetchNews";
import { NewsShort } from "../../components/news/NewsShort";
import { NewsWrapper } from "./news.styles";
import { Title } from "../../components/title/Title";
import { StyledTitleWrap } from "../../components/title/title.styles";

export const News: React.FC = () => {
	const { data } = useFetchNews();

	if (!data) return null;

	return (
		<>
			<StyledTitleWrap>
				<Title>News</Title>
			</StyledTitleWrap>
			<NewsWrapper>
				{data.map((item) => (
					<NewsShort key={item.id} news={item} />
				))}
			</NewsWrapper>
		</>
	);
};

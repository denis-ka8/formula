import { Title } from "../../../components/title/Title";
import { StyledTitleWrap } from "../../../components/title/title.styles";
import { AdminRacePosition } from "./RacePosition";

export const AdminRaceAdd: React.FC = () => {
	return (
		<>
			<StyledTitleWrap>
				<Title>Race Add</Title>
			</StyledTitleWrap>
			<table>
				<thead>
					<tr>
						<td>Position</td>
						<td>Driver</td>
						<td>Team</td>
						<td>Fastest Lap</td>
						<td>Points</td>
					</tr>
				</thead>
				<tbody>
					{[...Array(20)].map((e, i) => (
						<AdminRacePosition key={i} position={i} />
					))}
				</tbody>
			</table>
		</>
	);
};

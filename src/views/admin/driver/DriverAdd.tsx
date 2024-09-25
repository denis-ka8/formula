import { Title } from "../../../components/title/Title";
import { StyledTitleWrap } from "../../../components/title/title.styles";
import { useDriverAdd } from "./useDriverAdd";

export const AdminDriverAdd: React.FC = () => {
	const { firstName, lastName, handleChange, handleAddClick, addError } =
		useDriverAdd();

	return (
		<>
			<StyledTitleWrap>
				<Title>Driver Add</Title>
			</StyledTitleWrap>
			<input
				type="text"
				name="firstName"
				placeholder="First name"
				value={firstName}
				onChange={handleChange}
			/>
			<input
				type="text"
				name="lastName"
				placeholder="Last name"
				value={lastName}
				onChange={handleChange}
			/>
			{addError && <div>Error</div>}
			<button type="button" onClick={handleAddClick}>
				Add driver
			</button>
		</>
	);
};

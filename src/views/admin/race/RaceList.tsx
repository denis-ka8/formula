import { Link } from "react-router-dom";

export const AdminRaceList: React.FC = () => {
	return (
		<>
      Race List
      <br />
      <Link to="add">Add race</Link>
		</>
	);
};

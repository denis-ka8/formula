import { Link } from "react-router-dom";

export const AdminDriverList: React.FC = () => {
	return (
		<>
      Driver List
      <br />
      <Link to="add">Add driver</Link>
		</>
	);
};

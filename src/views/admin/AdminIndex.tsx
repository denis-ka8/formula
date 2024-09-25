import { Outlet } from "react-router-dom";
import { Content, Layout } from "../layout/app.styles";
import { LeftMenu } from "../../components/menu/LeftMenu";
import { faCircleUser, faFlagCheckered } from "@fortawesome/free-solid-svg-icons";

export const AdminIndex: React.FC = () => {
	const menuItems = [
		{ icon: faFlagCheckered, title: "Race", link: "race" },
		{ icon: faCircleUser, title: "Driver", link: "driver" },
	];

	return (
		<>
			<Layout>
				<LeftMenu menuItems={menuItems} />
				<Content>
					<Outlet />
				</Content>
			</Layout>
		</>
	);
};

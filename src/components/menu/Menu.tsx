import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { MenuWrapper } from "./menu.styles";
import { MenuItem } from "./MenuItem";

export const Menu: React.FC = () => {
	return (
		<MenuWrapper>
			<MenuItem icon={faCoffee} title="Dashboard" link="/" />
			<MenuItem icon={faCoffee} title="News" link="/news" />
			<MenuItem icon={faCoffee} title="Schedule" link="/" />
			<MenuItem icon={faCoffee} title="Championship" link="/championship" />
			<MenuItem icon={faCoffee} title="Drivers" link="/drivers" />
			<MenuItem icon={faCoffee} title="Teams" link="/teams" />
		</MenuWrapper>
	);
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuLink } from "./menu.styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface MenuItemProps {
	title: string;
	icon: IconProp;
	link: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, icon, link }) => {
	return (
		<MenuLink to={link}>
			<FontAwesomeIcon icon={icon} size="lg" />
			{title}
		</MenuLink>
	);
};

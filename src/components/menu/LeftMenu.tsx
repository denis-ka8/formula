import { Logo, MenuWrapper } from "./menu.styles";
import { Menu } from "./Menu";
import { MenuItemProps } from "./MenuItem";

interface LeftMenuProps {
	menuItems: MenuItemProps[];
}

export const LeftMenu: React.FC<LeftMenuProps> = ({ menuItems }) => {
	return (
		<MenuWrapper>
			<Logo src="/images/logo.png" />
			<Menu menuItems={menuItems} />
		</MenuWrapper>
	);
};

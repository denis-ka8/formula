import { MenuItem, MenuItemProps } from "./MenuItem";

interface MenuProps {
	menuItems: MenuItemProps[];
}

export const Menu: React.FC<MenuProps> = ({ menuItems }) => {
	return (
		<>
			{menuItems.map((item) => (
				<MenuItem
					key={item.title}
					icon={item.icon}
					title={item.title}
					link={item.link}
				/>
			))}
		</>
	);
};

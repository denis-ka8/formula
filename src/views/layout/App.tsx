import React from "react";
import { Content, Layout } from "./app.styles";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { LeftMenu } from "../../components/menu/LeftMenu";
import {
	faCircleUser,
	faHome,
	faList,
	faNewspaper,
	faPeopleLine,
	faTrophy,
} from "@fortawesome/free-solid-svg-icons";

function App() {
	const menuItems = [
		{ icon: faHome, title: "Dashboard", link: "/" },
		{ icon: faNewspaper, title: "News", link: "/news" },
		{ icon: faList, title: "Schedule", link: "/" },
		{ icon: faTrophy, title: "Championship", link: "/championship" },
		{ icon: faCircleUser, title: "Drivers", link: "/drivers" },
		{ icon: faPeopleLine, title: "Teams", link: "/teams" },
	];

	return (
		<Layout>
			<LeftMenu menuItems={menuItems} />
			<Content>
				<Header />
				<Outlet />
			</Content>
		</Layout>
	);
}

export default App;

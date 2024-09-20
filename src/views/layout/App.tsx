import React from "react";
import { Content, Layout } from "./app.styles";
import { Menu } from "../../components/menu/Menu";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<Layout>
			<Menu />
			<Content>
				<Outlet />
			</Content>
		</Layout>
	);
}

export default App;

import { createBrowserRouter } from "react-router-dom";
import App from "../views/layout/App";
import { ErrorPage } from "../views/error/ErrorPage";
import { News } from "../views/news/News";
import { Championship } from "../views/championship/Championship";
import { Drivers } from "../views/drivers/Drivers";
import { Teams } from "../views/teams/Teams";
import { AdminIndex } from "../views/admin/AdminIndex";
import { AdminRaceList } from "../views/admin/race/RaceList";
import { AdminRaceAdd } from "../views/admin/race/RaceAdd";
import { AdminDriverList } from "../views/admin/driver/DriverList";
import { AdminDriverAdd } from "../views/admin/driver/DriverAdd";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "news",
				element: <News />,
			},
			{
				path: "championship",
				element: <Championship />,
			},
			{
				path: "drivers",
				element: <Drivers />,
			},
			{
				path: "teams",
				element: <Teams />,
			},
		],
	},
	{
		path: "/admin",
		element: <AdminIndex />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "race",
				element: <AdminRaceList />,
			},
			{
				path: "race/add",
				element: <AdminRaceAdd />,
			},
			{
				path: "driver",
				element: <AdminDriverList />,
			},
			{
				path: "driver/add",
				element: <AdminDriverAdd />,
			},
		],
	},
]);

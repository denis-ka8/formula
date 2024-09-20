import { createBrowserRouter } from "react-router-dom";
import App from "../views/layout/App";
import { ErrorPage } from "../views/error/ErrorPage";
import { News } from "../views/news/News";
import { Championship } from "../views/championship/Championship";
import { Drivers } from "../views/drivers/Drivers";
import { Teams } from "../views/teams/Teams";

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
]);

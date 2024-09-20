import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./store";
import { router } from "./routes/root";

async function enableMocking() {
	if (process.env.NODE_ENV === "development") {
		const { worker } = await import("./mock/node");
		return worker.start();
	}
}

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
enableMocking().then(() => {
	root.render(
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

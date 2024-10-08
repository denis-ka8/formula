import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage: React.FC = () => {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		if (error.status === 401) {
			// ...
		} else if (error.status === 404) {
			// ...
		}

		return (
			<div>
				<h1>Oops! {error.status}</h1>
				<p>{error.statusText}</p>
				{error.data?.message && (
					<p>
						<i>{error.data.message}</i>
					</p>
				)}
			</div>
		);
	} else if (error instanceof Error) {
		return (
			<div>
				<h1>Oops! Unexpected Error</h1>
				<p>Something went wrong.</p>
				<p>
					<i>{error.message}</i>
				</p>
			</div>
		);
	} else {
		return <></>;
	}
};

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { News } from "./views/news/news";

function App() {
	return (
		<div>
			<FontAwesomeIcon icon={faCoffee} size="lg" />

      <News />
		</div>
	);
}

export default App;

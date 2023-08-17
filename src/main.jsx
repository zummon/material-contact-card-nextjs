import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./Context";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
	<Provider>
		<App />
	</Provider>
);

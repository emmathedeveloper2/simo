import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import checkForAppUpdates from "./lib/updater";
import ModelLoader from "./components/ModelLoader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ModelLoader>
      <App />
    </ModelLoader>
  </React.StrictMode>,
);

checkForAppUpdates()
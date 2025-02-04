import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import checkForAppUpdates from "./lib/updater";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);

checkForAppUpdates(false)
import React from "react";
// import ReactDOM from "react-dom";
// import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./routes/App";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />);
// render(<App tab="home" />, document.getElementById("app"));
// ReactDOM.render(<App />, document.getElementById("root"));

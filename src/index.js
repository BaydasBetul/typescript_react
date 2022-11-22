import React from "react"; //React is the engine that runs how these applications get built.
import { createRoot } from "react-dom/client"; //React Dom is specifying that that engine should be directed towards web related applications, though these two libraries combined is what actually allows us to build out all of our web application in React.
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

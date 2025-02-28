import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// const anotherElment = (
//   <a href="Https://google.com" target="_blank">
//     Visit us
//   </a>
// );
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "click to visit google"
// );

// createRoot(document.getElementById("root")).render(reactElement);

// // function customrender(reactElement, root) {
// //   const domElement = document.createElement(reactElement.type);
// //   domElement.innerHTML = reactElement.children;
// //   for (const prop in reactElement.props) {
// //     if (prop === "children") continue;

// //     domElement.setAttribute(prop, reactElement.props[prop]);
// //   }

// //   root.appendChild(domElement);
// // }

// // const root = document.querySelector("#root");

// // customrender(reactElement, root);

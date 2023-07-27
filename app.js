import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "child1h1"),
    React.createElement("h2", {}, "child1h2"),
    React.createElement("h2", {}, "namaste react"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "child2h1"),
    React.createElement("h2", {}, "child2h2"),
  ]),
]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//without links we need to import
import React from "react";
import ReactDOM from "react-dom/client"; 
 
 
 const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },
    [
      React.createElement("h1", { key: "h1-c1" }, "I am h1 tag of child 1"),
      React.createElement("h2", { key: "h2-c1" }, "I am h2 tag of child 1"),
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    [
      React.createElement("h1", { key: "h1-c2" }, "I am h1 tag of child 2"),
      React.createElement("h2", { key: "h2-c2" }, "I am h2 tag of child 2"),
    ]
  ),
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import {jsx as _jsx} from 'react/jsx-runtime.js'

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  );
}

const ReactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};
const anotherUser = "chai aur React";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click me to visit google",
  anotherUser
);

createRoot(document.getElementById("root")).render(
  reactElement
);

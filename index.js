import ReactDOM from "react-dom";
import React from "react";

import App from "./src";

let mountNode = document.getElementById("app");
ReactDOM.render(<App name="World" />, mountNode);

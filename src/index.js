let message = "Hello From Entry!!!";
console.log(message);

import React from "react";
import ReactDom from "react-dom";

import App from "./components/app";

ReactDom.render(<App/>, document.getElementById('app'));
import React from "react";
import { render } from "react-dom";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import GlobalState from "./GlobalState/GlobalState";

render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById("root")
);

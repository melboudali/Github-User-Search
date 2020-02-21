import React from "react";
import ReactDOM from "react-dom";
import GithubeState from "./Components/Context/GitHub/GithubState";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <GithubeState>
    <App />
  </GithubeState>,
  document.getElementById("root")
);

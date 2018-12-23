import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { ConfigProvider } from "vantage-fetch";

const config = {
  mode: "dev",
  api: {
    url: "https://dog.ceo/api/breeds",
    loginUrl: "https://dog.ceo",
    endpoints: {
      list: "/list/all",
      random: "/image/random",
      breed: (name = "hound") => `/${name}/images`,
      sub: (name = "hound") => `/${name}/list`
    }
  }
};

ReactDOM.render(
  <ConfigProvider config={config}>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);

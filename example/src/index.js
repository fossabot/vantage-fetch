import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import { ConfigProvider } from "vantage-fetch";

const config = {
  mode: "dev",
  api: {
    url: "https://api.thecatapi.com/v1",
    loginUrl: "https://thecatapi.com",
    headers: {
      "x-api-key": "773e5529-3da1-4879-af26-84f608211c35"
    },
    endpoints: {
      list: "/breeds",
      breeds: "/images/search?limit=8&page=100&order=DESC",
      search: (name = "beng") => `/images/search?breed_id=${name}`,
      categories: "/categories",
      byCategory: (selected_category_id = 5) =>
        `/images/search?category_ids=${selected_category_id}`,
      vote: "/votes"
    }
  }
};

ReactDOM.render(
  <Router>
    <ConfigProvider config={config}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById("root")
);

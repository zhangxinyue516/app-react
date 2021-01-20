import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom"; //引入路由，as相当于起个别名
import "./index.css";
import MyProvider from "./components/provider";
import App from "./App";

ReactDOM.render(
  //value表示数据
  <MyProvider>
    <Router>
      <App />
    </Router>
  </MyProvider>,
  document.getElementById("root")
);

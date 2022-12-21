import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { NotFound } from "./components/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log(
  `The current URL is ${window.location.pathname}${window.location.search}${window.location.hash}`
);
console.log("IndexTest 4");

const basePath = "/thesoundstable.com-react";
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Switch>
        <Route exact path="/" children={<App />} />
        <Route exact path={basePath} children={<App />} />

        <Route path={`/ElXokas`} children={<App />} />
        <Route path={`/xokas`} children={<App />} />
        <Route path={`${basePath}/ElXokas`} children={<App />} />
        <Route path={`${basePath}/xokas`} children={<App />} />

        {/* Not found */}
        <Route path="*" children={<NotFound />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./routes/Form";
import Home from "./routes/Home";
import NewForm from "./routes/NewForm";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route path="" element={<Home />} />
        <Route path="forms/new" element={<NewForm />} />
        <Route path="forms/:slug" element={<Form />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

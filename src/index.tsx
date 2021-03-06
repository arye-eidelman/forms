import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/tailwind.css";
import { Form, Forms, Home, NewForm } from "./routes";
import { App } from "./components";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="" element={<Home />} />
          <Route path="forms" element={<Forms />}>
            <Route path="new" element={<NewForm />} />
            <Route path=":slug" element={<Form />} />
          </Route>
          <Route path="*" element={
            <main className="p-4">
              <p>There's nothing here!</p>
            </main>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

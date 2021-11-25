import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateButton from "./Components/GenerateButton"
import UserForm from "./Components/UserForm";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
    <Routes>
      <Route path="/" element={<App button={<GenerateButton/>} />} />
      <Route path="/generate" element={<App button={<UserForm/>} />} />
      
    </Routes>
     
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

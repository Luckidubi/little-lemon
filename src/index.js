import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BookingProvider } from "./context/BookingContext";
import { AlertProvider } from "./context/AlertContext";
import Alert from "./components/Alert";
import { MenuProvider } from "./context/MenuContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <ChakraProvider>
        <AlertProvider>
          <BookingProvider>
            <MenuProvider>
              <App />
            </MenuProvider>
          </BookingProvider>
          <Alert />
        </AlertProvider>
      </ChakraProvider>
    </React.StrictMode>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

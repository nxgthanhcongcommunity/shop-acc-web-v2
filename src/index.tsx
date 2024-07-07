import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./stores";
import { ToastProvider, WebSocketProvider } from "./providers";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>

  // </React.StrictMode>
  <Provider store={store}>
    <WebSocketProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </WebSocketProvider>
  </Provider>
);

reportWebVitals();

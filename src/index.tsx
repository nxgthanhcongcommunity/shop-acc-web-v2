import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { ToastProvider, WebSocketProvider } from "./providers";
import reportWebVitals from "./reportWebVitals";
import { store } from "./stores";
import { ConfigProvider } from "antd";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <WebSocketProvider>
      <ToastProvider>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              colorPrimary: "#ffc53d",
              // borderRadius: 2,

              // // Alias Token
              // colorBgContainer: "#f6ffed",
            },
          }}
        >
          <App />
        </ConfigProvider>
      </ToastProvider>
    </WebSocketProvider>
  </Provider>
);

reportWebVitals();

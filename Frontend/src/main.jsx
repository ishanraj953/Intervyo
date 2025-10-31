import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./Reducer/index.js";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "../src/components/shared/ThemeContext";
const store = configureStore({
  reducer: rootReducer,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
        <Toaster position="top-right" />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

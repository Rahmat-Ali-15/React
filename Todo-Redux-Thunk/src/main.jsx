import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { Provider } from "react-redux";
import { ownStore } from "./Redux/Store.js";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={ownStore}>
      <App />
    </Provider>
  </BrowserRouter>
);

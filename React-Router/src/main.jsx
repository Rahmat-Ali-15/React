import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { ContextComponent } from "./Context/ContextComponent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextComponent>
      <App />
    </ContextComponent>
  </BrowserRouter>
);

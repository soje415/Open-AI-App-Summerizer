import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { createRoot } from 'react-dom/client';


import App from "./App";
import { store } from "./services/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

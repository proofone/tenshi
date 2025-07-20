import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { router } from "./router";
import store from "./redux/store";

import "./scss/styles.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

const root = createRoot(document.getElementById("content"));

root.render(
  <StrictMode>
      <Provider store={store}>
        <RouterProvider
            router={router}
            fallbackElement={<p>Initial Load...</p>}
        />
      </Provider>
  </StrictMode>
);

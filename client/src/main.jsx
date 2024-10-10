import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Login from "./pages/Login";
import NewAccount from "./pages/NewAccount";

import notesLoader from "./services/notesLoader";
import notesAction from "./services/notesAction";
import userAction from "./services/userAction";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: notesLoader.AllNotesLoader,
        errorElement: <Login />,
      },
      {
        path: "/add",
        element: <Add />,
        action: notesAction,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/newaccount",
        element: <NewAccount />,
        action: userAction,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from "./Component/Auth";
import Home from "./Component/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />, // Default route
    children: [
      { path: "homepage", element: <Home /> }, // "/homepage"
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

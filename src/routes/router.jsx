import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Documentacao from "../pages/Documentacao/Documentacao";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/documentacao",
          element: <Documentacao />,
        },
      ],
    },
  ]);
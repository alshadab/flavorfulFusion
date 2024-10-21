import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;

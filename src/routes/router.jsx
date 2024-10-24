import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignupPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import OffersPage from "../pages/OffersPage/OffersPage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/offers",
        element: <OffersPage />,
      },
      {
        path: "/shops",
        element: <ShopsPage/>
      }
    ],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;

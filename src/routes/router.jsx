import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignupPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import OffersPage from "../pages/OffersPage/OffersPage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";
import UserDashLayouts from "../layouts/UserDashLayouts/UserDashLayouts";
import UserDashHomePage from "../pages/UserDashHomePage/UserDashHomePage";
import AdminDashLayouts from "../layouts/AdminDashLayouts/AdminDashLayouts";
import AdminDashHomePage from "../pages/AdminDashHomePage/AdminDashHomePage";

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
        element: <ShopsPage />,
      },
    ],
  },
  {
    path: "/userdash",
    element: <UserDashLayouts />,
    children: [
      {
        path: "/userdash",
        element: <UserDashHomePage />,
      },
    ],
  },
  {
    path: "/admindash",
    element: <AdminDashLayouts />,
    children: [
      {
        path: "/admindash",
        element: <AdminDashHomePage />,
      },
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

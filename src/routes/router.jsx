import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignupPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactPage from "../pages/ContactPage/ContactPage";

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
  {
    path:"/signup",
    element: <SignUpPage/>
  },
  {
    path:"/login",
    element: <LoginPage/>
  },
  {
    path: "/contact",
    element: <ContactPage/>
  }
]);

export default router;

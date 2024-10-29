import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import HomePage from "../pages/HomePage/HomePage";
import SignUpPage from "../pages/SignupPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import OffersPage from "../pages/OffersPage/OffersPage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";
import UserDashLayouts from "../layouts/UserDashLayouts/UserDashLayouts";
import AdminDashLayouts from "../layouts/AdminDashLayouts/AdminDashLayouts";
import UserDashHomePage from "../pages/UserPanelPages/UserDashHomePage/UserDashHomePage";
import AdminDashHomePage from "../pages/AdminPanelPages/AdminDashHomePage/AdminDashHomePage";
import AdminAllProductsPage from "../pages/AdminPanelPages/AdminAllProductsPage/AdminAllProductsPage";
import AdminAllCategoriesPage from "../pages/AdminPanelPages/AdminAllCategoriesPage/AdminAllCategoriesPage";
import AdminAllPendingOrdersPage from "../pages/AdminPanelPages/AdminAllPendingOrdersPage/AdminAllPendingOrdersPage";
import AdminAllCancelledOrdersPage from "../pages/AdminPanelPages/AdminAllCancelledOrdersPage/AdminAllCancelledOrdersPage";
import AdminAllRefundOrdersPage from "../pages/AdminPanelPages/AdminAllRefundOrdersPage/AdminAllRefundOrdersPage";
import AdminAllDeliveredOrdersPage from "../pages/AdminPanelPages/ADminAllDeliveredOrdersPage/AdminAllDeliveredOrdersPage";
import AdminFAQ from "../pages/AdminPanelPages/AdminFAQ/AdminFAQ";
import AdminAllReviews from "../pages/AdminPanelPages/AdminAllReviews/AdminAllReviews";
import AdminAllUsersPage from "../pages/AdminPanelPages/AdminAllUsers/AdminAllUsersPage";
import AdminAllVendorsPage from "../pages/AdminPanelPages/AdminAllVendorsPage/AdminAllVendorsPage";
import AdminAllAdminPage from "../pages/AdminPanelPages/AdminAllAdminPages/AdminAllAdminPage";
import VendorDashPage from "../pages/VendorPanelPages/VendorDashPage/VendorDashPage";
import VendorDashLayout from "../layouts/VendorDashLayout/VendorDashLayout";

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
    path: "/",
    element: <UserDashLayouts />,
    children: [
      {
        path: "/userdash",
        element: <UserDashHomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <VendorDashLayout />,
    children: [
      {
        path: "/vendordash",
        element: <VendorDashPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AdminDashLayouts />,
    children: [
      {
        path: "/admindash",
        element: <AdminDashHomePage />,
      },
      {
        path: "allproducts",
        element: <AdminAllProductsPage/>
      },
      {
        path: "allcategories",
        element: <AdminAllCategoriesPage/>
      },
      {
        path: "allpendingorders",
        element: <AdminAllPendingOrdersPage/>
      },
      {
        path: "allcancelledorders",
        element: <AdminAllCancelledOrdersPage/>
      },
      {
        path: "allrefundorders",
        element: <AdminAllRefundOrdersPage/>
      },
      {
        path: "alldeliveredorders",
        element: <AdminAllDeliveredOrdersPage/>
      },
      {
        path: "allfaq",
        element: <AdminFAQ/>
      },
      {
        path: "allreviews",
        element: <AdminAllReviews/>
      },
      {
        path: "allusers",
        element: <AdminAllUsersPage/>
      },
      {
        path: "allvendors",
        element: <AdminAllVendorsPage/>
      },
      {
        path: "alladmins",
        element: <AdminAllAdminPage/>
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

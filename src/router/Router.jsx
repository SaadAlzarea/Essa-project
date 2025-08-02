import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "../pages/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Details from "../pages/Details";
import DetilesApartment from "../pages/DetilesApartment";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import { useState } from "react";
import TermsAndConditions from "../pages/TermsAndConditions";
import Payment from "../pages/Payment";
// import Payment from "../pages/Payment";

function Layout() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <Nav setShowSettings={setShowSettings} />
      <Outlet context={{ showSettings, setShowSettings }} />
      <Footer />
    </>
  );
}
function Auth() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    children: [
      { path: "signup", element: <Signup /> },
      { index: true, element: <Signin /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "details", element: <Details /> },
      { path: "detailsA", element: <DetilesApartment /> },
      { path: "profile", element: <Profile /> },
      { path: "setting", element: <Setting /> },
      { path: "t&c", element: <TermsAndConditions /> },
      { path: "Payment", element: <Payment /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

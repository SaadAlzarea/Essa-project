import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "../pages/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Details from "../pages/Details";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
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
      { path: "signin", element: <Signin /> },
      { index:true, element: <Signup /> },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "details", element: <Details /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

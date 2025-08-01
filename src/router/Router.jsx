import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Landing from "../pages/Landing";
import Home from "../pages/Home";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "landing", element: <Landing /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

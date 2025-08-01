import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Landing from "../pages/Landing";
import Home from "../pages/Home";

function Layout() {
  return (
    <>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/", element: <Landing /> },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;

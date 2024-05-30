import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layouts/Index";
import pages from "../Pages";
const { Home } = pages;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
export default router;

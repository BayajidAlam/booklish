import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/all-books",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


export default routes;
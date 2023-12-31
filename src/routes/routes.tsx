import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/Product";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import AddNewBook from "../pages/AddNewBook";
import BookDetails from "../pages/BookDetails";
import UpdateBook from "../pages/UpdateBook";
import PrivateRoute from "../route/PrivateRoute";

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
      {
        path: "/books/:id",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: <AddNewBook />,
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
    path: "/add-new-book",
    element: (
      <PrivateRoute>
        <AddNewBook />
      </PrivateRoute>
    ),
  },
  {
    path: "/update-book/:id",
    element: <UpdateBook />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;

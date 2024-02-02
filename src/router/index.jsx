import { createBrowserRouter } from "react-router-dom";
import Register from "../page/Register";
import Home from "../page/Home";
import Product from "../page/Menu/Product";
import Profile from "../page/Menu/Profile";
import NotFound from "../page/Menu/NotFound";
import PrivateRoute from "../Commponents/PrivateRoute";
import Login from "../page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Login />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    // children: [
    //   { path: "/home", index: true, element: <Home /> },
    //   {
    //     path: "product",
    //     element: <Product />,
    //   },
    //   {
    //     path: "/profile",
    //     element: <Profile />,
    //   },
    // ],
  },
  {
    path: "/home",
    index: true,
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/product", element: <Product /> },

  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;

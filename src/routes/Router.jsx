import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";

import OurMenu from "../pages/Menu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Secret from "../pages/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../pages/Dashboard/MyCart";
import Menu from "../pages/Dashboard/Menu";
import Users from "../pages/Dashboard/Users";
import AddItem from "../pages/Dashboard/AddItem";
import AdminRouter from "./AdminRouter";
import ManageItem from "../pages/Dashboard/ManageItem";

export const router = createBrowserRouter([
      {
            path: '/',
            element: <Main />,
            errorElement: <ErrorPage />,
            children: [
                  {
                        path: '/',
                        element: <Home />
                  },
                  {
                        path: 'menu',
                        element: <OurMenu />
                  },
                  {
                        path: 'shop/:category',
                        element: <OurShop />
                  },
                  {
                        path: 'login',
                        element: <Login />
                  },
                  {
                        path: 'register',
                        element: <Register />
                  },
                  {
                        path: 'secret',
                        element: <PrivateRoute><Secret></Secret></PrivateRoute>
                  },

            ]
      },
      {
            path: 'dashboard',
            element: <PrivateRoute><Dashboard /></PrivateRoute>,
            children: [
                  {
                        path: 'my-cart',
                        element: <MyCart />
                  },
                  {
                        path: 'menulist',
                        element: <Menu></Menu>
                  }, {
                        path: 'all-users',
                        element: <Users />
                  },
                  {
                        path:'add-item',
                        element:<AdminRouter><AddItem/></AdminRouter>
                  },
                  {
                        path:'manageItems',
                        element:<AdminRouter><ManageItem></ManageItem></AdminRouter>
                  }
            ]
      }
])
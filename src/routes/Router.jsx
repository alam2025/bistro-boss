import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";

import OurMenu from "../pages/Menu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
export const  router=createBrowserRouter([
      {
            path:'/',
            element:<Main/>,
            children:[
                  {
                        path:'/',
                        element:<Home/>
                  },
                  {
                        path:'menu',
                        element:<OurMenu/>
                  },
                  {
                        path:'shop/:category',
                        element:<OurShop/>
                  },
                  {
                        path:'login',
                        element:<Login/>
                  }
            ]
      }
])
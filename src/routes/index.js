import {lazy} from "react";

import App from "../App";
import Header from "../Components/Header";


const Home = lazy(() => import("../Pages/Home"))
const Cinema = lazy(() => import("../Pages/Cinema"))
//const Concert = lazy(() => import("../pages/Concert"))
//const Theater = lazy(() => import("../pages/Theater"))
//const Other = lazy(() => import("../pages/Other"))
const OperaBallet = lazy(() => import("../Pages/OperaBallet"))
const ClubsPubs = lazy(() => import("../Pages/ClubsPubs"))
const Account = lazy(() => import("../Pages/Account"))
const Profile = lazy(() => import("../Pages/Profile"))
const Registration = lazy(() => import("../Pages/Registration"))
const Admin = lazy(() => import("../Pages/Admin"))
const Ticket = lazy(() => import("../Pages/Ticket"))



const routes = [
  {
      path: "/",
      element: <Header />,
      children: [
        { index: true, element: <App /> },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "cinema",
          element: <Cinema />
        },
        //{
          //path: "concert",
          //element: <Concert />
        //},
        //{
          //path: "theater",
          //element: <Theater />
        //},
        {
          path: "operaBallet",
          element: <OperaBallet />
        },
        {
          path: "clubsPubs",
          element: <ClubsPubs />
        },
        //{
          //path: "other",
          //element: <Other />
        //},
        {
          path: "myaccount",
          element: <Account />
        },
        {
          path: "profile",
          element: <Profile />
        },
        {
          path: "registration",
          element: <Registration />
        },
        {
          path: "admin",
          element: <Admin />
        },
        {path: "ticket",
        element: <Ticket />
      }
       
      ]
  }
    ]

export default routes;

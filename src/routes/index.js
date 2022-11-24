import {lazy} from "react";

import App from "../App";
import Header from "../components/Header";
import SingleEvent from "../components/SingleEvent";


<<<<<<< HEAD
import Home from "../pages/Home";
import Cinema from "../pages/Cinema";
import Concert from "../pages/Concert";
import Theater from "../pages/Theater";
import Other from "../pages/Other";
import OperaBallet from "../pages/OperaBallet";
import ClubsPubs from "../pages/ClubsPubs";

import Account from "../pages/Account";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
=======
const Home = lazy(() => import("../pages/Home"))
const Cinema = lazy(() => import("../pages/Cinema"))
const Concert = lazy(() => import("../pages/Concert"))
const Theater = lazy(() => import("../pages/Theater"))
const Other = lazy(() => import("../pages/Other"))
const OperaBallet = lazy(() => import("../pages/OperaBallet"))
const ClubsPubs = lazy(() => import("../pages/ClubsPubs"))
const Account = lazy(() => import("../pages/Account"))
const Profile = lazy(() => import("../pages/Profile"))
const Registration = lazy(() => import("../pages/Registration"))



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
        {
          path: "concert",
          element: <Concert />
        },
        {
          path: "theater",
          element: <Theater />
        },
        {
          path: "operaBallet",
          element: <OperaBallet />
        },
        {
          path: "clubsPubs",
          element: <ClubsPubs />
        },
        {
         path: "other",
         element: <Other />
        },
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

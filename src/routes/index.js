import {lazy} from "react";

import App from "../App";
import Header from "../Components/Header";
import SingleEvent from "../Components/SingleEvent";


const Home = lazy(() => import("../Pages/Home"))
const Cinema = lazy(() => import("../Pages/Cinema"))
const Concert = lazy(() => import("../Pages/Concert"))
const Theater = lazy(() => import("../Pages/Theater"))
const Other = lazy(() => import("../Pages/Other"))
const OperaBallet = lazy(() => import("../Pages/OperaBallet"))
const ClubsPubs = lazy(() => import("../Pages/ClubsPubs"))
const Account = lazy(() => import("../Pages/Account"))
const Profile = lazy(() => import("../Pages/Profile"))
const Registration = lazy(() => import("../Pages/Registration"))



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
            path: "singleEvent",
            element: <SingleEvent />
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
          }
         
        ]
    }
      ]

export default routes;

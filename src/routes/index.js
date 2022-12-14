import {lazy} from "react"

import App from "../App"
import Header from "../components/Header"
import SingleOnline from "../pages/SinglePages/SingleOnline/index"
import ErrorPage from "../pages/Error-page/error-page"

const ClubsEvent = lazy(() => import("../pages/ClubsPubs/ClubsEvent"))
const ConcertEvent = lazy(() => import("../pages/Concert/concertEvent"))
const OperaEvent = lazy(() => import("../pages/OperaBallet/operaEvent"))
const SingleEvent = lazy(() => import("../pages/Theater/singleEvent"))
const Home = lazy(() => import("../pages/Home"))
const Cinema = lazy(() => import("../pages/Cinema"))
const Concert = lazy(() => import("../pages/Concert"))
const Theater = lazy(() => import("../pages/Theater"))
const Online = lazy(() => import("../pages/Online"))
const OperaBallet = lazy(() => import("../pages/OperaBallet"))
const ClubsPubs = lazy(() => import("../pages/ClubsPubs"))
const Account = lazy(() => import("../pages/Account"))
const Profile = lazy(() => import("../pages/Profile"))
const Registration = lazy(() => import("../pages/Registration"))
const Admin = lazy(() => import("../pages/Admin"))
const Ticket = lazy(() => import("../pages/Ticket"))


const routes = [
    {
        path: "/",
        element: <Header />,
        errorElement: <ErrorPage />,
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
            path: "online",
            element: <Online />
          },
          {
            path: 'online/:id',
            element: <SingleOnline />
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
          { path: "ticket",
          element: <Ticket />
        },
        {
          path: "ClubsEvent",
          element: <ClubsEvent />
        },
        {
          path: "ConcertEvent",
          element: <ConcertEvent />
        },
        {
          path: "operaEvent",
          element: <OperaEvent />
        },
        {
          path: "SingleEvent",
          element: <SingleEvent />
        }
        ]
      }  
    ]

export default routes

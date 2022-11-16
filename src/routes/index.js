import App from "../App";
import Header from "../components/Header";

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
          }
         
        ]
    }
      ]

export default routes;
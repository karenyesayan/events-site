import App from "../App";
import Header from "../components/Header";

import Home from "../pages/Home";
import Cinema from "../pages/Cinema";
import Concert from "../pages/Concert";
import Theater from "../pages/Theater";
import Other from "../pages/Other";

import Account from "../pages/Account";


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
            path: "other",
            element: <Other />
          },
          {
            path: "myaccount",
            element: <Account />
          },
        ]
      }
]

export default routes;
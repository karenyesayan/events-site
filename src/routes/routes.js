import App from "../App";
import HomePage from "../Pages/HomePage";
import Theatre from "../Pages/Theatre/Theatre";
import TheatreSchedule from "../Pages/Theatre/TheatreSchedule";
const routes = [
    {
        id: 1,
        path: '/',
        element: <App />,
        children: [
            {
                id: 2,
                path: 'HomePage',
                element: <HomePage />
                
            },
            {
                id: 3,
                path: 'theatre',
                element: <Theatre />  
            },
            {
                id: 3,
                path: 'TheatreSchedule',
                element: <TheatreSchedule />   
            }
        ]
    }
]

export default routes
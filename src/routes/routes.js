import App from "../App";
import HomePage from "../Pages/HomePage";
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
                
            }
        ]
    }
]

export default routes
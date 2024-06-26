import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";

const routes = createBrowserRouter([
    {
        path: "/", element: <App/>,
        children: [
            {index: true, element: <HomePage/>}
        ],
    },
]);


export default routes;




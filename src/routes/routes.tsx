import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";
import AuthPage from "@/pages/AuthPage.tsx";

const routes = createBrowserRouter([
    {
        path: "/", element: <App/>,
        children: [
            {index: true, element: <HomePage/>},
        ],
    },
    {path: "/auth/login", element: <AuthPage/>}
]);


export default routes;




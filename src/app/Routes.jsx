import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout.jsx";
import NotFound from "../pages/NotFound.jsx";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ]
    }
]);
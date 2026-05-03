import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.page.jsx";
import MainLayout from "../layouts/Main.layout.jsx";
import NotFound from "../pages/NotFound.page.jsx";
import Profile from "../pages/Profile.page.jsx";

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
                path : '/profile',
                element : <Profile/>
            },
            {
                path : '*',
                element : <NotFound/>
            }
        ]
    }
]);
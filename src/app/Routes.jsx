import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.page.jsx";
import MainLayout from "../layouts/Main.layout.jsx";
import NotFound from "../pages/NotFound.page.jsx";
import Profile from "../pages/Profile.page.jsx";
import Message from "../pages/Message.page.jsx";
import Chat from "../pages/Chat.page.jsx";

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
                path : '/message',
                element : <Message/>
            },
            {
                path : '/message/chat',
                element : <Chat/>
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
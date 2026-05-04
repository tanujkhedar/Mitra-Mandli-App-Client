import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.page.jsx";
import MainLayout from "../layouts/Main.layout.jsx";
import NotFound from "../pages/notFound/NotFound.page.jsx";
import Profile from "../pages/profile/Profile.page.jsx";
import Message from "../pages/message/Message.page.jsx";
import Chat from "../pages/chats/Chat.page.jsx";
import Reels from "../pages/reels/Reels.page.jsx";

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
                path : '/reels',
                element : <Reels/>
            },
            {
                path : '/message',
                element : <Message/>,
                children : [
                    {
                        path : '/message/chat/:id',
                        element : <Chat/>
                    },
                ]
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
    },
]);
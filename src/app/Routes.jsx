import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home.page.jsx";
import MainLayout from "../layouts/Main.layout.jsx";
import NotFound from "../pages/notFound/NotFound.page.jsx";
import Profile from "../pages/profile/Profile.page.jsx";
import Message from "../pages/message/Message.page.jsx";
import Chat from "../pages/chats/Chat.page.jsx";
import Reels from "../pages/reels/Reels.page.jsx";
import SignUp from "../pages/auth/SignUp.page.jsx";
import Login from "../pages/auth/Login.page.jsx";
import { ProtectedRoutes } from "./protected.routes.jsx";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <MainLayout/>,
        children : [
            {
                path : '/',
                element :( 
                    <ProtectedRoutes>
                        <Home/>
                    </ProtectedRoutes>
                )
            },
            {
                path : '/reels',
                element : ( 
                    <ProtectedRoutes>
                        <Reels/>
                    </ProtectedRoutes>
                )
            },
            {
                path : '/message',
                element : ( 
                    <ProtectedRoutes>
                        <Message/>
                    </ProtectedRoutes>
                ),
                children : [
                    {
                        path : '/message/chat/:id',
                        element : ( 
                            <ProtectedRoutes>
                                <Chat/>
                            </ProtectedRoutes>
                )
                    },
                ]
            },
            {
                path : '/profile',
                element : ( 
                    <ProtectedRoutes>
                        <Profile/>
                    </ProtectedRoutes>
                )
            },
            {
                path : '*',
                element : ( 
                    <ProtectedRoutes>
                        <NotFound/>
                    </ProtectedRoutes>
                )
            }
        ]
    },
    {
        path : '/register',
        element : <SignUp/>
    },
    {
        path : 'login',
        element : <Login/>
    }
]);
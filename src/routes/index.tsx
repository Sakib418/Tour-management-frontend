import App from "@/App";
import about from "@/pages/about";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children : [
        {
            Component: about,
            path: "about",
        }
    ]
    },
    {
        Component: Login,
        path: "/login",
    }
    ,
    {
        Component: Register,
        path: "/register",
    }
    ,
    {
        Component: Verify,
        path: "/verify",
    }

    
])
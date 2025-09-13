import App from "@/App";
import AdminLayout from "@/layout/AdminLayout";
import about from "@/pages/about";
import Analytics from "@/pages/Analytics";
import { Component } from "lucide-react";
import { Children } from "react";
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
    }
    
])
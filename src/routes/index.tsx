import App from "@/App";
import DashboardLayout from "@/layout/DashboardLayout";
import About from "@/pages/about";
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";

export const router = createBrowserRouter([
    {
        Component: App,
        path: "/",
        children: [
            {
                Component: withAuth(About),
                path: "about",
            }
        ]
    },
    {
        Component: withAuth(DashboardLayout, role.superAdmin as TRole),
        path: "/admin",
        children: [
            { index: true, element: <Navigate to="/admin/analytics" /> },
            ...generateRoutes(adminSidebarItems)],
    },
    {
        Component: withAuth(DashboardLayout, role.user as TRole),
        path: "/user",
        children: [
            ...generateRoutes(userSidebarItems)
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
    ,
    {
        Component: Unauthorized,
        path: "/unauthorized",
    }

])
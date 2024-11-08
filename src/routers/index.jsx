import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@layouts/AppLayout";
import DashboardLayout from "@layouts/DashboardLayout";

import Catalogue from "@pages/Catalogue/Catalogue";
import DetailCatalogue from "@pages/Catalogue/_details";

import Approval from "@pages/Dashboard/Approval";
import Database from "@pages/Dashboard/Database";

import Login from "@pages/Login";
import Register from "@pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
            {
                path: "/",
                element : <Catalogue />
            },
            {
                path: "/details/:id",
                element : <DetailCatalogue />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children : [
            {
                path: "/dashboard/approval",
                element : <Approval />,
            },
            {
                path: "/dashboard/database",
                element : <Database />
            },
            {
                path: "/dashboard/approval/details/:id",
                element : <DetailCatalogue />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
])

export default router
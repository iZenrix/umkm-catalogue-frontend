import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@layouts/AppLayout";
import DashboardLayout from "@layouts/DashboardLayout";

import Dashboard from "@pages/Dashboard/Dashboard";
import Catalogue from "@pages/Catalogue/Catalogue";
import DetailCatalogue from "@pages/Catalogue/_details";
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
                path: "/dashboard",
                element : <Dashboard />
            }
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
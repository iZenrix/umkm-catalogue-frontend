import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@layouts/AppLayout";
import DashboardLayout from "@layouts/DashboardLayout";

import ErrorPage from "@pages/ErrorPage";

import Catalogue from "@pages/Catalogue/Catalogue";
import DetailCatalogue from "@pages/Catalogue/_details";
import RegisterUmkm from "@pages/Catalogue/RegisterUmkm";
import MyUmkm from "@pages/Catalogue/MyUmkm";
import RegisterProduct from "@pages/Catalogue/RegisterProduct";
import EditUmkm from "@pages/Catalogue/EditUmkm";

import Approval from "@pages/Dashboard/Approval";
import Categories from "@pages/Dashboard/Categories";
import Types from "@pages/Dashboard/Types";

import Login from "@pages/Login";
import Register from "@pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement : <ErrorPage redirectLink={"/"}/>,
        children : [
            {
                path: "/",
                element : <Catalogue />
            },
            {
                path: "/details/:id",
                element : <DetailCatalogue />
            },
            {
                path: "/register-umkm",
                element : <RegisterUmkm />
            },
            {
                path: "/my-umkm",
                element : <MyUmkm />,
            },
            {
                path : "/edit-umkm/:id",
                element : <EditUmkm />
            },
            {
                path: "/add-product",
                element : <RegisterProduct />
            },
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
                path: "/dashboard/approval/details/:id",
                element : <DetailCatalogue />
            },
            {
                path: "/dashboard/categories",
                element : <Categories />
            },
            {
                path: "/dashboard/types",
                element : <Types />
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBrowserRouter } from "react-router";
import { InvoicesLayout } from "../features/invoices/presentation/layouts/InvoicesLayout";
import { PublicRoute } from "../features/shared/components/PublicRoute";
import { Login } from "../features/auth/presentation/pages/Login";
import { PrivateRoute } from "../features/shared/components/PrivateRoute";
import { DashboardLayout } from "../features/shared/layouts/DashboardLayout";
import { Invoices } from "../features/invoices/presentation/pages/Invoices";

export const menuRoutes = [


  {

    to: "/invoices",
    icon: <FontAwesomeIcon icon={["fal", "coffee"]} />,
    title: "Facturas",
    description: "Facturas del cliente",
    component: <InvoicesLayout />,
    show: true,
    children: [
      {
        index:true,
        element: <Invoices />
      }
    ]

  },




]


export const router = createBrowserRouter([

  {
    element: <PublicRoute />,
    children:[
      {
        element:<Login />,
        path:'/login'
      }
    ]
  },
  {
    element: <PrivateRoute />,
    children: [
     {
      element: <DashboardLayout />,
      path: '/',
      children:[
        ...menuRoutes.map((route) =>({
          path: route.to,
          element: route.component,
          children: [...route.children]
        }))
      ]
     }
    ]
  }


]);
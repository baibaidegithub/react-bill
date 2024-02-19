//创建路由实例 绑定path element

import Layout from "@/page/Layout/Layout";
import Month from "@/page/Month/Month";
import New from "@/page/New/New";
import Year from "@/page/Year/Year";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:"month",
                element:<Month/>
            },
            {
                path:"year",
                element:<Year/>
            }
        ]
    },
    {
        path:"/new",
        element:<New/>
    }
])

export default router
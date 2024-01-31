import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import { TestPage } from "../pages/TestPage/TestPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <MainPage />
        }, {
            path: "/testpage",
            element: <TestPage />
        },
        ]
    }
])


export default router
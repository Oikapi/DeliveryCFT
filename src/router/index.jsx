import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import { TestPage } from "../pages/TestPage/TestPage";
import { SelectCostPage } from "../pages/SelectCostPage/SelectCostPage";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <MainPage />
        }, {
            path: "/select-cost",
            element: <SelectCostPage />
        },
        ]
    }
])


export default router
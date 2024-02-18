import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import { TestPage } from "../pages/TestPage/TestPage";
import { FormDeliveryCostPage } from "../pages/FormDeliveryCostPage/FormDeliveryCostPage";
import AuthPage from "../pages/AuthPage/AuthPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import AuthSecondStepPage from "../pages/AuthSecondStepPage/AuthSecondStepPage";
import { FormReceiverPage } from "../pages/FormReceiverPage/FormReceiverPage";
import { FormSenderAddressPage } from "../pages/FormSenderAddressPage/FormSenderAddressPage";
import { FormReceiverAddressPage } from "../pages/FormRecieverAddressPage/FormRecieverAddressPage";
import { FormPayerPage } from "../pages/FormPayerPage/FormPayerPage";
import { FormSenderPage } from "../pages/FormSenderPage.jsx/FormSenderPage";
import LastStepPage from "../pages/LastStepPage/LastStepPage";
import HistoryPage from "../pages/HistoryPage/HistoryPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [{
            path: "/",
            element: <MainPage />
        }, {
            path: "history",
            element: <HistoryPage />
        }, {
            path: "/form-cost",
            element: <FormDeliveryCostPage />
        }, {
            path: "/form-receiver",
            element: <FormReceiverPage />,
        },
        {
            path: "/form-sender",
            element: <FormSenderPage />,
        },
        {
            path: "/form-receiver-address",
            element: <FormReceiverAddressPage />
        },
        {
            path: "/form-sender-address",
            element: <FormSenderAddressPage />
        },
        {
            path: "form-payer",
            element: <FormPayerPage />
        },
        {
            path: "last-step",
            element: <LastStepPage />
        },
        {
            path: "/auth",
            element: <AuthPage />
        },
        {
            path: "auth-second",
            element: <AuthSecondStepPage />,
        },
        {
            path: "/profile",
            element: <ProfilePage />
        }
        ]
    }
])


export default router
import PublicLayout from '../layouts/PublicLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import LandingPage from "../pages/LandingPage"
import Architecture from "../pages/Architecture"
import Chat from "../pages/Chat"
import CodeReview from "../pages/CodeReview"
import Dashboard from "../pages/Dashboard"
import Documentation from "../pages/Documentation"
import Error from "../pages/Error"
import Repository from "../pages/Repository"
import TestGeneration from "../pages/TestGeneration"
import { createBrowserRouter} from 'react-router-dom'

const Routes = createBrowserRouter([
    {
        path:"/",
        element:<PublicLayout/>,
        children:[
            {
                index:true,
                element:<LandingPage/>,
            },
        ],
        errorElement:<Error/>,
    },
    {
        path:"/app",
        element:<DashboardLayout/>,
        children:[
            {
                index:true,
                path:"dashboard",
                element:<Dashboard/>,
            },
            {
                path:"documentation",
                element:<Documentation/>,
            },
            {
                path:"architecture",
                element:<Architecture/>,
            },
            {
                path:"chat",
                element:<Chat/>,
            },
            {
                path:"codereview",
                element:<CodeReview/>,
            },
            {
                path:"repository",
                element:<Repository/>,
            },
            {
                path:"testgeneration",
                element:<TestGeneration/>,
            },
        ],
        errorElement:<Error/>,
    }
]);

export default Routes;
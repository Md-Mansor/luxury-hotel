import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Rooms from "../Pages/Shared/Rooms/Rooms";
import Register from "../Pages/Shared/Register/Register";
import Bookings from "../Pages/Shared/Bookings/Bookings";
import Login from "../Pages/Shared/Log/Login";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "rooms",
                element: <Rooms></Rooms>
            },
            {
                path: "booking",
                element: <Bookings></Bookings>
            },
            {
                path: "signUp",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            }
        ]
    }
])

export default router
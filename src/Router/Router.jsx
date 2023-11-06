import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import Rooms from "../Pages/Shared/Rooms/Rooms";
import Register from "../Pages/Shared/Register/Register";
import Bookings from "../Pages/Shared/Bookings/Bookings";
import Login from "../Pages/Shared/Log/Login";
import FormOne from "../Forms/Form1/FormOne";
import Room from "../Forms/Room/Room";
import Private from "./Private";



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
                element: <Private><Bookings></Bookings></Private>
            },
            {
                path: "signUp",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "adding",
                element: <Private><FormOne></FormOne></Private>
            },
            {
                path: "create",
                element: <Room></Room>
            }
        ]
    }
])

export default router
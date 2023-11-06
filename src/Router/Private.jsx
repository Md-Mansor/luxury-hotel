import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation()
    console.log(location.pathname);


    if (loading) {

        <span className="loading loading-spinner text-error"></span>
    }

    if (user) {
        return children
    }
    return <Navigate to="/login" replace state={location.pathname}></Navigate>

};

export default Private;
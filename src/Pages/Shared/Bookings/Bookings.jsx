import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([]);

    const url = `http://localhost:5000/booked?email=${user?.Email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooked(data))

    }, [])
    return (
        <div>
            <h1>My Booked Room :{booked.length} </h1>
        </div>
    );
};

export default Bookings;
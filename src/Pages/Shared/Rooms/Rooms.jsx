import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Rooms = () => {
    const [rooms, setRooms] = useState([])


    useEffect(() => {
        const apiUrl = 'https://b8a11-server-side-md-mansor.vercel.app/room';
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            })
    }, []);


    return (
        <div className="lg:grid grid-flow-col  gap-12 justify-around py-10" >
            {
                rooms.map((room) => (
                    <div key={room._id} className="card w-96 bg-base-100 shadow-xl">
                        <Link to={`/roomDetails/${room?._id}`}>
                            <figure><img src={room.Photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {room.Title}
                                </h2>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Price: ${room.Price}</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    );
};

export default Rooms;


{/* <Link to={`/data/${product._id}`}>
    <button className="btn btn-outline btn-info">View Details And Price</button>
</Link> */}
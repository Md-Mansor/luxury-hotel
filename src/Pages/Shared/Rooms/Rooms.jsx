import { useEffect, useState } from "react";


const Rooms = () => {
    const [rooms, setRooms] = useState([])


    useEffect(() => {
        const apiUrl = 'http://localhost:5000/room';
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setRooms(data);
            })
    }, []);


    return (
        <div>
            {
                rooms.map((room) => (
                    <li key={room.id}>{room.Price}</li>
                ))
            }
        </div>
    );
};

export default Rooms;
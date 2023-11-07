import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const RoomDetails = () => {

    const [roomDetails, setRoomDetails] = useState([])
    const { id } = useParams();
    console.log(id, roomDetails);
    const { Photo, Price, One, Two, Three, Title, Location } = roomDetails;


    useEffect(() => {
        const apiUrl = `http://localhost:5000/roomDetails/${id}`
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setRoomDetails(data);
            })
    }, []);

    return (
        <div>
            <img src={Photo} alt="" />
            <img src={One} alt="" />
            <img src={Two} alt="" />
            <img src={Three} alt="" />
            <p>{Price}</p>
            <p>{Title}</p>
            <p>{Location}</p>
        </div>
    );
};

export default RoomDetails;
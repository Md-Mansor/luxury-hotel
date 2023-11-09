import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const RoomDetails = () => {


    const [roomDetails, setRoomDetails] = useState([])
    const { id } = useParams();
    console.log(id, roomDetails);
    const { Photo, Price, One, Two, Description, Title, Size } = roomDetails;


    useEffect(() => {
        const apiUrl = `https://b8a11-server-side-md-mansor.vercel.app/roomDetails/${id}`
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setRoomDetails(data);
            })
    }, [id]);

    return (
        <div className="flex gap-10  p-12">
            <div className="w-3/4">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={Photo} className="w-full rounded-md h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={One} className="w-full rounded-md h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={Two} className="w-full rounded-md h-96" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                </div>
                <div className="w-1/2 py-4 flex flex-col gap-4 ">
                    <p className="text-2xl font-bold">{Title}</p>
                    <p className="text-xl font-semibold">{Description}</p>
                </div>
            </div>
            <div className="w-1/4 border-4 flex flex-col items-center gap-4 border-red-300 border-dotted rounded-xl" >
                <p className="text-xl font-bold">Price Per Night : $ {Price}</p>
                <p className="font-bold text-xl">Room Size :{Size} ft<sup>2</sup></p>
                <Link to={`/bookingForm/${id}`}>
                    <button className="btn btn-outline btn-error">Book Now</button>
                </Link>
            </div>
        </div>
    );
};

export default RoomDetails;
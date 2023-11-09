import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [booked, setBooked] = useState([]);

    const handleDelete = id => {
        const proceed = confirm('Are You Sure');
        if (proceed) {
            const deleteUrl = `https://b8a11-server-side-md-mansor.vercel.app/booked/${id}`;
            fetch(deleteUrl, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        // Refresh the data after successful deletion
                        const url = `https://b8a11-server-side-md-mansor.vercel.app/booked?Email=${user?.email}`;
                        fetch(url)
                            .then(res => res.json())
                            .then(data => setBooked(data))
                            .catch(error => console.error('Error:', error));
                    } else {
                        console.error('Deletion failed:', data.message);
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    }

    const url = `https://b8a11-server-side-md-mansor.vercel.app/booked?Email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooked(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <div className="overflow-x-auto p-10">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Room Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booked.map((row, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{row.Name}</td>
                                <td>{row.Title}</td>
                                <td>{row.Price}</td>
                                <td>{row.Size}</td>
                                <td>
                                    <button onClick={() => handleDelete(row._id)} className="btn btn-outline btn-error">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;

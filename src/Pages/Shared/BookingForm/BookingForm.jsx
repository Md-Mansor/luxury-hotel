import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const BookingForm = () => {
    const bookingRoom = useLoaderData()
    const { Title, Price, Size } = bookingRoom;
    const { user } = useContext(AuthContext)

    const confirmedBooked = event => {
        event.preventDefault();
        const form = event.target;
        const Name = form.Name.value;
        const Email = user?.email;
        const Title = form.Title.value;
        const Price = form.Price.value;
        const Size = form.Size.value;
        const From = form.From.value;
        const To = form.To.value;

        const order = {
            Name: Name,
            Email,
            Title,
            Price,
            Size,
            From,
            To
        }
        console.log(order);
        fetch('http://localhost:5000/booked', {
            method: 'POST',
            headers: {
                "content-type": ' application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <h1></h1>
            <form onSubmit={confirmedBooked}>
                <div className="grid lg:grid-cols-2 items-center mx-auto justify-center gap-10 px-12 py-20">
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">Name</span>
                        </label>
                        <input type="text" placeholder="Title" defaultValue={user?.displayName} name="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">Room Title</span>
                        </label>
                        <input type="text" placeholder="Title" defaultValue={Title} name="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">Price per night</span>
                        </label>
                        <input type="text" placeholder="Price" defaultValue={"$" + Price} name="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">Room Size</span>
                        </label>
                        <input type="text" placeholder="Size" defaultValue={Size + "Square Feet"} name="Size" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">From</span>
                        </label>
                        <input type="date" placeholder="" name="From" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">To</span>
                        </label>
                        <input type="date" placeholder="" name="To" className="input input-bordered" required />
                    </div>

                </div>
                <div className="form-control m-10">
                    <input className="btn btn-outline btn-primary" type="submit" value="Booked" />
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
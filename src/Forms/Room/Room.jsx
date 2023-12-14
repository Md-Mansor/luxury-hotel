import axios from "axios";



const Room = () => {


    const handelCreate = e => {
        e.preventDefault()
        const form = e.target;
        const Photo = form.Photo.value;
        const Price = form.Price.value;
        const Size = form.Size.value;
        const One = form.One.value;
        const Two = form.Two.value;
        const Three = form.Three.value;
        const Location = form.location.value
        const Title = form.title.value
        const Description = form.Description.value;
        const roomData = { Photo, Price, Size, One, Two, Three, Location, Title, Description }
        // console.log(Photo, Price, Size, One, Two, Three, Description);
        console.log(roomData);
        axios.post('http://localhost:5000/room', roomData)
            .then(data => {
                console.log(data.data);
            })
            .catch(error => {
                console.error('error is', error);
            })

    }


    return (
        <div>
            <h1 className="text-3xl font-bold text-center pt-12">Add Room Data Here</h1>
            <div className="flex justify-center">
                <form onSubmit={handelCreate} className="m-20 w-full border-green-500 rounded-md border-double border-2 p-4">
                    <div className="grid grid-cols-2 items-center mx-auto justify-center gap-10">
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Room Photo</span>
                            </label>
                            <input type="text" placeholder="Photo" name="Photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Price</span>
                            </label>
                            <input type="text" placeholder="Price" name="Price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Room Size</span>
                            </label>
                            <input type="text" placeholder="Size" name="Size" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Room Images</span>
                            </label>
                            <input type="text" placeholder="Images One" name="One" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Room Images</span>
                            </label>
                            <input type="text" placeholder="Images Two" name="Two" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Room Images</span>
                            </label>
                            <input type="text" placeholder="Images Three" name="Three" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Room Title</span>
                            </label>
                            <input type="text" placeholder="Title" name="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="">
                                <span className="text-lg font-medium">Location</span>
                            </label>
                            <input type="text" placeholder="location" name="location" className="input input-bordered" required />
                        </div>

                    </div>
                    <div className="form-control">
                        <label className="">
                            <span className="text-lg font-medium">Description</span>
                        </label>
                        <textarea type="text" placeholder="Description" name="Description" className="textarea textarea-error" required />
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-outline btn-primary" type="submit" value="Upload" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Room;
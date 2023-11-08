import axios from "axios";

const FormOne = () => {

    const handelSubmit = e => {

        e.preventDefault()
        const form = e.target;
        const url = form.url.value;
        const imageLink = { url };
        console.log(imageLink);

        axios.post('https://b8a11-server-side-md-mansor-6tj1f71hj-md-mansors-projects.vercel.app/homeBanner', imageLink)
            .then(data => {
                console.log(data.data);
            })
            .catch(error => {
                console.error('error is ', error);
            })
    }

    return (
        <div className="flex justify-center items-center m-16">
            <form onSubmit={handelSubmit} className="card w-96 border-green-500 border-double border-2 p-4">
                <div className="form-control">
                    <label className="text-center">
                        <span className="text-lg font-medium">URL</span>
                    </label>
                    <input type="text" placeholder="image URL" name="url" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-outline btn-primary" type="submit" value="Upload" />
                </div>
            </form>
        </div>
    );
};

export default FormOne;
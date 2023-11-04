import { Link } from "react-router-dom";
import img from "../../../assets/register.jpg"

const Register = () => {
    const handelRegister = e => {
        e.preventDefault()
    }
    return (
        <div>
            <div className="hero min-h-screen mt-11 rounded-md">
                <div className=" flex flex-col lg:flex-row">
                    <div className="">
                        <img src={img} alt="" className="rounded-md" />
                    </div>
                    <div className="flex-shrink-0 rounded-lg shadow-2xl text-center border bg-cyan-100 glass">
                        <form onSubmit={handelRegister} className="m-12">
                            <div>
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="">Email:</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="">Password:</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-success">Register </button>
                            </div>
                        </form>
                        <h1 className="text-center border p-2 text-lg font-medium text-green-700 ">Already Have an Account <br /> <Link to="/login" className="hover:text-rose-700 " >logIn Now </Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
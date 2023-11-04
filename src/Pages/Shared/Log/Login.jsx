import { Link } from "react-router-dom";
import img from "../../../assets/login.jpg"

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-sky-100  mt-11 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="">
                        <img src={img} alt="" />
                    </div>
                    <div className=" rounded-md   flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-primary">Login</button>
                            </div>
                        </form>
                        <h1 className="text-center border p-2 text-lg font-medium text-indigo-400  ">New In This Page <Link to="/signUp" className="hover:text-rose-700 " >Register Now </Link> </h1>
                        <p className="text-center">Or Login With</p>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
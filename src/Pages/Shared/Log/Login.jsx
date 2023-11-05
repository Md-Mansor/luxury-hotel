import { Link } from "react-router-dom";
import img from "../../../assets/login.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);

    const handelLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }
    return (
        <div>
            <div className="hero min-h-screen bg-sky-100">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src={img} alt="" />
                    </div>
                    <div className=" rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelLogin} className="card-body">
                            <h1 className="text-3xl text-center font-semibold">Log In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span>Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span>Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center">Or Login With</p>
                        <img src="" alt="" />
                        <h1 className="text-center border p-2 text-lg font-medium text-indigo-400  ">New In This Page <Link to="/signUp" className="hover:text-rose-700 " >Register Now </Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
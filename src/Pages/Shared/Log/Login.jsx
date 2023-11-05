import { Link } from "react-router-dom";
import logo from "../../../assets/google.png"
import img from "../../../assets/login.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../../Firebase/Firebase.config";

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth(app)
    const handelGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Login Successfully')

            })
            .catch(error => {
                console.log('error', error.massage);
            })
    }

    const handelLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('login Successfully');
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
                        <div className="flex flex-col gap-1 justify-center  items-center">
                            <p className="">Or Login With</p>
                            <img onClick={handelGoogleLogin} src={logo} alt="google" className="w-16 h-16 hover:cursor-pointer" />
                        </div>
                        <h1 className="text-center border p-2 text-lg font-medium text-indigo-400  ">New In This Page <Link to="/signUp" className="hover:text-rose-700 " >Register Now </Link> </h1>
                    </div>
                </div>
            </div>
            <Toaster></Toaster>
        </div>
    );
};

export default Login;
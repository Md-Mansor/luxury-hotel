import { Link } from "react-router-dom";
import img from "../../../assets/register.jpg"
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {


    const { createUser } = useContext(AuthContext)


    const handelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-sky-100 ">
                <div className=" hero-content flex flex-col lg:flex-row">
                    <div className="w-1/2">
                        <img src={img} alt="" className="rounded-md" />
                    </div>
                    <div className="rounded-md flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelRegister} className="card-body">
                            <h1 className="text-3xl text-center font-semibold">Register Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name:</span>
                                </label>
                                <input type="name" placeholder="name" name="name" className="input input-bordered" required />
                            </div >
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email:</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Password:</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-outline btn-success" type="submit" value="Register" />
                            </div>
                        </form>
                        <h1 className="text-center border p-2 text-lg font-medium text-green-700 ">Already Have an Account <br /> <Link to="/login" className="hover:text-rose-700 " >log In Now </Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
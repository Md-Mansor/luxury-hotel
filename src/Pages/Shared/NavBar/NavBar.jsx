import { useContext } from "react";
import logo from "../../../assets/accommodation.png"
import { Link } from 'react-router-dom';
import { AuthContext } from "../../../Provider/AuthProvider";


const NavBar = () => {


    const { logOut, user } = useContext(AuthContext);

    const handelLogOut = () => {
        logOut()
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            })
    }
    console.log(user);


    const navItems = <>
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/rooms'>Rooms</Link></li>
        <li><Link to='/booking'>My Booking</Link></li>

    </>
    return (
        <div>
            <div className="navbar bg-teal-100 shadow-xl h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="navbar-start hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-xl font-semibold active:text-cyan-500">
                            {navItems}
                        </ul>
                    </div>
                </div>
                <div className='navbar-center lg:flex'>
                    <Link to="/" className="rounded-sm hidden lg:flex">
                        <img src={logo} alt="" />
                    </Link>

                </div>

                <div className="navbar-end">
                    {
                        user ? (
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex flex-col-reverse items-center gap-1 border-2 rounded-md bg-lime-100 pt-2">
                                    <p className="textarea-sm font-semibold">{user.displayName}</p>
                                    <img src={user.photoURL} alt="" className="rounded-full w-12 h-12" />
                                </div>
                                <div>
                                    <button className="btn btn-outline btn-info" onClick={handelLogOut}>Log Out</button>
                                </div>
                            </div>
                        ) :
                            <Link to='login' className="btn btn-outline btn-info">Sign In</Link>
                    }
                    <input type="checkbox" className="toggle toggle-success" checked />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
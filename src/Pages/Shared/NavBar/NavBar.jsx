import logo from "../../../assets/accommodation.png"
import { Link } from 'react-router-dom';

const NavBar = () => {
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
                    <Link to='signUp' className="btn btn-outline btn-info">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
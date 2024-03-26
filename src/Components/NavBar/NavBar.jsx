import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100 lg:w-[1280px] m-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/booklisted">Listed Books</NavLink></li>
                        <li><NavLink to="/pagetoread">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <a className=" lg:text-5xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal space-x-6 px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/booklisted">Listed Books</NavLink></li>
                    <li><NavLink to="/pagetoread">Pages to Read</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end lg:space-x-3">
                <button className="btn btn-outline btn-success hidden lg:block hover:text-white">Sign In</button>
                <button className="btn btn-outline btn-warning">Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;
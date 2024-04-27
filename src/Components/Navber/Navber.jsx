import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css'


const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()
  
  const handleSignOut = () => {
    logOut()
    .then(()=>{
      navigate('/')
    })
    .catch();}

    const menu = <>
    <li > <NavLink  to='/'> Home </NavLink> </li>
    <li > <NavLink  to='/artCraft'> Art & Craft </NavLink> </li>
    <li > <NavLink  to='/addItem'>Add Craft Item </NavLink> </li>
    <li > <NavLink  to='/myCraft'>My Craft List </NavLink> </li>
    {
        user && <li > <NavLink  to='/about'> About </NavLink> </li>
    }
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {menu}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"> <img className="h-10 w-10" src="https://i.ibb.co/C2Rx4rg/website-logo-removebg-preview.png" alt="website-logo" /> Crafty Carve</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {menu}
      
    </ul>
  </div>
  <div className="navbar-end">
          {/* user picture and logout/login btn */}
          {user ? (
            <div className="flex gap-3 items-center ">
              <div> 
                
                <a id="clickable">
                <img 
                  className="h-14 w-14 rounded-full   "
                  src={
                    (user && user.photoURL) ||
                    "https://i.ibb.co/VHD1J6g/user-profile-icon-free-vector.jpg"
                  }
                  alt=""
                />
                </a>
                <Tooltip className="light" anchorSelect="#clickable" clickable>
                    <p>{user.displayName} </p>
                <button
                onClick={handleSignOut}
                className="btn bg-red-600 text-white"
              >
                Logout
              </button>
                    </Tooltip>
              </div>
              
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="btn bg-green-500 text-white">
                Login
              </Link>
              <Link to="/register" className="btn text-green-500 ">
                Register
              </Link>
            </div>
          )}
        </div>
</div>
        </div>
    );
};

export default Navber;
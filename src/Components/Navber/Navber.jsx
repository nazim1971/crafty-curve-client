import { Link, NavLink } from "react-router-dom";


const Navber = () => {

    const menu = <>
    <li > <NavLink  to='/'> Home </NavLink> </li>
    <li > <NavLink  to='/artCraft'> Art & Craft </NavLink> </li>
    <li > <NavLink  to='/addItem'>Add Craft Item </NavLink> </li>
    <li > <NavLink  to='/myCraft'>My Craft List </NavLink> </li>
    <li > <NavLink  to='/about'> About </NavLink> </li>
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
    <Link to='/login' className="btn btn-secondary">Login</Link>
    <Link to='/register' className="btn btn-warning">Register</Link>
  </div>
</div>
        </div>
    );
};

export default Navber;
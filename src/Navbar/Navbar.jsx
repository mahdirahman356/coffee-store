import navImg from "../assets/images/more/15.jpg"
import logo from "../assets/images/more/logo1.png"
import '../App.css'
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
           <div style={{backgroundImage: `url(${navImg})`}}>
            <div className="navbar text-white md:w-[80%] mx-auto" >
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-black">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>

    <button className="btn btn-ghost text-xl md:text-3xl rancho-regular">
    <img className="w-[40px]" src={logo} alt="" />
    Espresso Emporium</button>  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 raleway font-semibold gap-5">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/users">Users</NavLink>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className="btn py-1 rancho-regular text-[20px] rounded-sm bg-[#E3B577] border-none">Login</Link>
  </div>
</div>
           </div>
    );
};

export default Navbar;
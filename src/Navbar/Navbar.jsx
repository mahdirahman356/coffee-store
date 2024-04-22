import navImg from "../assets/images/more/15.jpg"
import logo from "../assets/images/more/logo1.png"
import '../App.css'

const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content flex justify-center" style={{backgroundImage: `url(${navImg})`}}>
  <button className="btn btn-ghost text-xl md:text-3xl rancho-regular">
    <img className="w-[40px]" src={logo} alt="" />
    Espresso Emporium</button>
</div>
    );
};

export default Navbar;
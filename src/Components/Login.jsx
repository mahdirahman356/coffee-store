import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";

const Login = () => {
    let {loginUser} = useContext(AuthContext)
    let handleLogin = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password)
        loginUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
    return (
        <div>
        <div className="w-[95%] md:w-[60%] mx-auto mt-16">
        <Link  to={-1} className="flex items-center gap-2"><FaArrowLeftLong className="text-[20px]"/> <p className="rancho-regular text-xl md:text-2xl">Go back</p></Link>
        </div>
        <div className="w-[95%] md:w-[60%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
            <div className="text-center md:w-[70%] mx-auto">
                    <h3 className="text-4xl rancho-regular mb-3">Login Your Account</h3>
            </div>
            <form onSubmit={handleLogin}>
                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Email</p>
                    <input type="email"
                        placeholder="Enter Your Email Address"
                        name="email"
                        className="input  w-full"
                        required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Password</p>
                    <input type="password"
                        placeholder="Enter Your Password"
                        name="password"
                        className="input  w-full"
                        required />
                    </div>
                </div>

                <input className="btn text-[20px] rancho-regular bg-[#D2B48C] w-full my-6" type="submit" value="Login Youn Account" />
                <p className="raleway">Dont have an account? <Link to="/singup"><span className="text-[#D2B48C] underline">Create an account</span></Link> </p>
            </form>
        </div>
    </div>
    );
};

export default Login;
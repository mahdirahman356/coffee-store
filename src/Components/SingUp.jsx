import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Context";
import Swal from "sweetalert2";
   

const SingUp = () => {
    let {createUser} = useContext(AuthContext)
    let handleSingin = (e) => {
        e.preventDefault()
        let form = e.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password)
        createUser(email, password)
        .then(result => {
            const usercreationTime = result.user?.metadata?.creationTime            
            const users = {email,password, usercreationTime: usercreationTime}
            console.log(result.user)
            fetch("https://coffee-store-sarver-rho.vercel.app/users", {
                method:"POST",
                headers: {"content-type" : "application/json"},
                body: JSON.stringify(users)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged === true) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your account is created successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                    form.reset()
                }
            })
        })
        .catch(error => {
            const errorMessage = error.message;
            console.log(errorMessage)
        })
    }
    return (
        <div>
        <div className="w-[95%] md:w-[60%] mx-auto mt-16">
        <Link  to={-1} className="flex items-center gap-2"><FaArrowLeftLong className="text-[20px]"/> <p className="rancho-regular text-xl md:text-2xl">Go back</p></Link>
        </div>
        <div className="w-[95%] md:w-[60%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
            <div className="text-center md:w-[70%] mx-auto">
                    <h3 className="text-4xl rancho-regular mb-3">Create Your Account</h3>
            </div>
            <form onSubmit={handleSingin}>
            <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Name</p>
                    <input type="email"
                        placeholder="Enter Your Name"
                        name="name"
                        className="input  w-full"
                         />
                    </div>
                </div>
                
                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Photo URL</p>
                    <input type="email"
                        placeholder="Enter Your Photo URL"
                        name="name"
                        className="input  w-full"
                         />
                    </div>
                </div>

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

                <input className="btn text-[20px] rancho-regular bg-[#D2B48C] w-full my-6" type="submit" value="Create Account" />
                <p className="raleway">Already have an account? <Link to="/login"><span className="text-[#D2B48C] underline">Login</span></Link> </p>
            </form>
        </div>
    </div>
    );
};

export default SingUp;
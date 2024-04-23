import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    let coffees = useLoaderData()
    let handleUpdate = (e) => {
        e.preventDefault()
        let form = e.target
        let name = form.name.value
        let chef = form.chef.value
        let supplier = form.supplier.value
        let test = form.test.value
        let category = form.category.value
        let details = form.details.value
        let photo = form.photo.value
        let create = {name, chef, supplier, test, category, details, photo,}
        console.log(create)
        fetch(`https://coffee-store-sarver-rho.vercel.app/coffees/${coffees._id}`, {
            method:"PUT",
            headers: {"content-type" : "application/json"},
            body : JSON.stringify(create)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }
    return (
        <div>
        <div className="w-[95%] md:w-[80%] mx-auto mt-16">
        <Link  to={-1} className="flex items-center gap-2"><FaArrowLeftLong className="text-[20px]"/> <p className="rancho-regular text-xl md:text-2xl">Go Back</p></Link>
        </div>
        <div className="w-[95%] md:w-[80%] mx-auto my-5 md:mb-16 bg-[#F4F3F0] p-5 md:p-20">
            <div className="text-center md:w-[70%] mx-auto">
                    <h3 className="text-4xl rancho-regular mb-3">Update Your Coffee</h3>
                    <p className="text-gray-500">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleUpdate}>
                {/* from-row-1 */}
                <div className="md:flex gap-4">
                    <div  className="w-full md:w-1/2">
                    <p className="font-semibold my-2 mt-5">Name</p>
                    <input type="text"
                        placeholder="Coffee Name"
                        name="name"
                        className="input  w-full"
                        defaultValue={coffees.name}
                        required />
                    </div>
                   <div className="w-full md:w-1/2">
                   <p className="font-semibold my-2 mt-5">Chef</p>
                    <input type="text"
                        placeholder="Enter Coffee Chef"
                        name="chef"
                        defaultValue={coffees.chef}
                        className="input  w-full"
                        required />
                   </div>
                </div>
                {/* from-row-2 */}
                <div className="md:flex gap-4">
                    <div  className="w-full md:w-1/2">
                    <p className="font-semibold my-2 mt-5">Supplier</p>
                    <input type="text"
                        placeholder="Enter Coffee Supplier"
                        name="supplier"
                        defaultValue={coffees.supplier}
                        className="input  w-full"
                        required />
                    </div>
                   <div className="md:w-1/2">
                   <p className="font-semibold my-2 mt-5">Test</p>
                    <input type="text"
                        placeholder="Enter Coffee Test"
                        name="test"
                        defaultValue={coffees.test}
                        className="input  w-full"
                        required /> 
                   </div>
                </div>
                {/* from-row-3 */}
                <div className="md:flex gap-4">
                    <div  className="md:w-1/2">
                    <p className="font-semibold my-2 mt-5">Category</p>
                    <input type="text"
                        placeholder="Enter Coffee Category"
                        name="category"
                        defaultValue={coffees.category}
                        className="input  w-full"
                        required />
                    </div>
                   <div className="md:w-1/2">
                   <p className="font-semibold my-2 mt-5">Details</p>
                    <input type="text"
                        placeholder="Enter Coffee Details"
                        name="details"
                        defaultValue={coffees.details}
                        className="input  w-full"
                        required />
                   </div>
                </div>
                {/* from-row-4 */}
                <div className="md:flex gap-4">
                    <div  className="md:w-full">
                    <p className="font-semibold my-2 mt-5">Photo</p>
                    <input type="text"
                        placeholder="Enter Photo URL"
                        name="photo"
                        defaultValue={coffees.photo}
                        className="input  w-full"
                        required />
                    </div>
                </div>

                <input className="btn text-[20px] rancho-regular bg-[#D2B48C] w-full mt-6" type="submit" value="Update Coffee" />
            </form>
        </div>
    </div>
    );
};

export default Update;
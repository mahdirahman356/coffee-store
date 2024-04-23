import PropTypes from 'prop-types';
import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const CoffeeCard = ({ coffees, setCoffees, coffeesProduct }) => {
    let { _id, photo, name, chef, supplier } = coffees

    let handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://coffee-store-sarver-rho.vercel.app/coffees/${_id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                                let deliteCoffee = coffeesProduct.filter(cof => cof._id !== _id)
                                setCoffees(deliteCoffee)
                            }
                        }
                        )
                }
            });
    }
    return (
        <div className=''>
            <div className="card card-side h-full p-7 flex flex-col lg:flex-row items-center gap-3 justify-between bg-[#ebe9e2]">
                <figure><img src={photo} alt="Movie" /></figure>

                <div className='space-y-1'>
                    <p className='font-semibold text-gray-600'>Name : <span className='font-normal'>{name}</span></p>
                    <p className='font-semibold text-gray-600'>Chef : <span className='font-normal'>{chef}</span></p>
                    <p className='font-semibold text-gray-600'>Supplier : <span className='font-normal'>{supplier}</span></p>
                </div>
                <div className="flex flex-row lg:flex-col gap-3">
                    <Link to={`/coffeeDetails/${_id}`}><button className="btn bg-[#D2B48C]"><IoMdEye className='text-[25px] text-white' /></button></Link>
                    <Link to={`/update/${_id}`}><button className="btn bg-[#3C393B]"><HiPencil className='text-[25px] text-white' /></button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn bg-[#EA4744]"><MdDelete className='text-[25px] text-white' /></button>
                </div>

            </div>
        </div>
    );
};

CoffeeCard.propTypes = {
    coffees: PropTypes.object.isRequired,
    coffeesProduct: PropTypes.array.isRequired,
    setCoffees: PropTypes.func.isRequired

}
export default CoffeeCard;

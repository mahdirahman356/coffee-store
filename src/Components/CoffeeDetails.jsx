import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
    let coffeeDetails = useLoaderData()
    let { name, chef, supplier, test, category, details, photo, } = coffeeDetails

    return (
        <div>
            <div className="w-[95%] md:w-[80%] mx-auto mt-24 mb-3">
            <Link  to={-1} className="flex items-center gap-2"><FaArrowLeftLong className="text-[20px]"/> <p className="rancho-regular text-xl md:text-2xl">Back to Home</p></Link>
            </div>
            <div className="card card-side h-full p-7 flex flex-col md:flex-row items-center gap-8 bg-[#ebe9e2] bg-opacity-40 w-[95%] md:w-[80%] mx-auto px-28 mb-28">
                <figure className="w-[35%]"><img className="min-w-2xl" src={photo} alt="Movie" /></figure>

                <div className='space-y-1'>
                    <p className="rancho-regular text-4xl">Niceties</p>
                    <p className='font-semibold text-gray-600'>Name : <span className='font-normal'>{name}</span></p>
                    <p className='font-semibold text-gray-600'>Chef : <span className='font-normal'>{chef}</span></p>
                    <p className='font-semibold text-gray-600'>Supplier : <span className='font-normal'>{supplier}</span></p>
                    <p className='font-semibold text-gray-600'>Test : <span className='font-normal'>{test}</span></p>
                    <p className='font-semibold text-gray-600'>Category : <span className='font-normal'>{category}</span></p>
                    <p className='font-semibold text-gray-600'>Details : <span className='font-normal'>{details}</span></p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;
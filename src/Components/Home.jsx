import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header.jsx/Header";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import cardBgImg from "../assets/images/more/1.png"
import { RiCupFill } from "react-icons/ri";


const Home = () => {
    let coffeesProduct = useLoaderData()
    let [coffees, setCoffees] = useState(coffeesProduct)
 
    return (
        <div>
            <Header></Header>
            <div className="" style={{backgroundImage: `url(${cardBgImg})`}}>
            <div className=" mx-auto flex flex-col justify-center items-center my-12 mt-24">
                <h1 className="text-2xl md:text-3xl font-bold mb-4 rancho-regular">Our Popular Products </h1>
            <Link to="/createCoffee"><button className="btn bg-[#E3B577] rancho-regular text-[20px] flex">Add Coffee <RiCupFill className="text-[20px]"/></button></Link>
            </div>
            <div className="w-[95%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                coffees.map((coffees, index) => <CoffeeCard
                key={index}
                coffees={coffees}
                coffeesProduct={coffeesProduct}
                setCoffees={setCoffees}
                ></CoffeeCard>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;
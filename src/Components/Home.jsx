import { Link, useLoaderData } from "react-router-dom";
import Header from "../Header.jsx/Header";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";
import cardBgImg from "../assets/images/more/1.png"
import { RiCupFill } from "react-icons/ri";
import cupImg1 from "../assets/images/cups/Rectangle 9.png"
import cupImg2 from "../assets/images/cups/Rectangle 10.png"
import cupImg3 from "../assets/images/cups/Rectangle 11.png"
import cupImg4 from "../assets/images/cups/Rectangle 12.png"
import cupImg5 from "../assets/images/cups/Rectangle 13.png"
import cupImg6 from "../assets/images/cups/Rectangle 14.png"
import cupImg7 from "../assets/images/cups/Rectangle 15.png"
import cupImg8 from "../assets/images/cups/Rectangle 16.png"


const Home = () => {
    let coffeesProduct = useLoaderData()
    let [coffees, setCoffees] = useState(coffeesProduct)
    return (
        <div>
            <Header></Header>
            <div className="" style={{backgroundImage: `url(${cardBgImg})`}}>
            <div className=" mx-auto flex flex-col justify-center items-center my-12 mt-24">
                <h1 className="text-2xl md:text-4xl font-bold mb-4 rancho-regular">Our Popular Products </h1>
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
            {/* image section */}
            <div className=" mx-auto flex flex-col justify-center items-center my-12 mt-24">
                  <p className="raleway">- Follow Us Now -</p>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 rancho-regular">Follow on Instagram</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-11">
                    <img src={cupImg1} alt="" />
                    <img src={cupImg2} alt="" />
                    <img src={cupImg3} alt="" />
                    <img src={cupImg4} alt="" />
                    <img src={cupImg5} alt="" />
                    <img src={cupImg6} alt="" />
                    <img src={cupImg7} alt="" />
                    <img src={cupImg8} alt="" />
                    
                </div>
            </div>
        </div>
    );
};

export default Home;
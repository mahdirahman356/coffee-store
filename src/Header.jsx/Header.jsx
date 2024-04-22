import bgImg from "../assets/images/more/3.png"
import "../App.css"
import icon1 from "../assets/images/icons/1.png"
import icon2 from "../assets/images/icons/2.png"
import icon3 from "../assets/images/icons/3.png"
import icon4 from "../assets/images/icons/4.png"
const Header = () => {
    return (
        <div>
          <div className="hero" style={{backgroundImage: `url(${bgImg})`}}>
  <div className=""></div>
  <div className="text-neutral-content md:w-[80%] h-full py-28 md:py-44">
    <div className="md:w-[50%] ml-auto p-4">
      <h1 className="mb-5 text-5xl  rancho-regular">Would you like a Cup of Delicious Coffee?</h1>
      <p className="mb-5 raleway">Its coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
      <button className="btn bg-[#E3B577] rounded-none border-none rancho-regular text-[20px]">Learn More</button>
    </div>
  </div>
</div>
         <div className="bg-[#ECEAE3]">
          <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 py-10">
          <div className="space-y-2">
            <img src={icon1} alt="" />
            <p className="rancho-regular text-3xl">Awesome Aroma</p>
            <p className="raleway">You will definitely be a fan of the design & aroma of your coffee</p>
          </div>

          <div className="space-y-2">
            <img src={icon2} alt="" />
            <p className="rancho-regular text-3xl">High Quality</p>
            <p className="raleway">We served the coffee to you maintaining the best quality</p>
          </div>

          <div className="space-y-2">
            <img src={icon3} alt="" />
            <p className="rancho-regular text-3xl">Pure Grades</p>
            <p className="raleway">The coffee is made of the green coffee beans which you will love</p>
          </div>

          <div className="space-y-2">
            <img src={icon4} alt="" />
            <p className="rancho-regular text-3xl">Proper Roasting</p>
            <p className="raleway">Your coffee is brewed by first roasting the green coffee beans</p>
          </div>
          
          </div>
         </div>

        </div>
    );
};

export default Header;
import { useLoaderData } from "react-router-dom";
import Slider from "./Homepage/Slider";
import CraftItem from "./Homepage/CraftItem";
import ArtCraftCategory from "./Homepage/ArtCraftCategory";
import { Typewriter } from "react-simple-typewriter";
import { FaApple, FaGooglePlay, FaWindows } from "react-icons/fa";

const Home = () => {
    const creaftItem = useLoaderData()
    return (
        <div>
           <div className="grid grid-cols-2 gap-5 my-20">
            <div className="flex flex-col justify-center space-y-4 w-[90%] ">
            <h1 className="text-5xl font-semibold ">
            <Typewriter
        words={['Earthy Clay Creations', 'Stone Crafted Marvels', 'Metal Magic in Sculpture','Culinary Artistry in Carving','Natures Sculpted Wonders','Beaded Delights in Sculpture']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
            </h1>
            <p>explores the inherent beauty and texture of organic elements, harmonizing art with nature's raw aesthetics.</p>
            </div>
            <Slider/>
           </div>
           <div className="my-20 text-center space-y-4">
            <h1 className="text-4xl font-semibold">Discover Handcrafted Delights</h1>
            <h1 > Explore Our Diverse Range of Artisanal Creations in the Craft Items Section</h1>
           </div>
           <div className="grid grid-cols-3 gap-5">
            {
                creaftItem.map(i=> <CraftItem key={i._id} i={i} /> )
            }
           </div>
           <div className="my-20 w-[60%] space-y-2 mx-auto text-center">
            <h1 className="text-4xl font-semibold">
            Crafted Wonders
            </h1>
            <p>Explore an array of artisanal treasures, from clay and stone sculptures to metal works, food carvings, and natural material creations.</p>
           </div>
           <div>
            <ArtCraftCategory/>
           </div>

           <div className="my-20 ">
           <div className="space-y-7 w-[60%] mx-auto text-center">
                <h1 className="text-5xl">

                <Typewriter
        words={['Got A Problem?', 'We Got You!', 'Got A Problem? We Got You!']}
        loop={true}
        cursor
        cursorStyle='_'
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={2000}
      />
                </h1>
                <p>“We rise by lifting others” is what we believe in. You won’t stay stuck in the process; that’s our promise. All the support tickets are taken care of with high priority. You will hear back from us within 12 hours of receiving your mail.</p>

               <div className="flex gap-8 justify-center">
               <button className="btn bg-green-500 text-white border-none">Contact Us</button>
                <button className="btn bg-white text-green-500 border-green-500">User Guide</button>
               </div>
                </div>
           </div>
            <div className="my-20 h-[500px] bg-cover flex flex-col justify-center  " style={{backgroundImage: 'url(https://i.ibb.co/wBq8mLc/help-1.jpg)'}}>
               <div className="w-[65%] mx-auto text-center space-y-5">
               <h1 className="text-5xl font-semibold">Navigating Artistic Challenges</h1>
                <p className="font-bold text-slate-700">Embark on a journey of artistic exploration and empowerment with our dedicated help section. Discover a treasure trove of resources designed to guide and inspire you through every stage of your creative process.</p>
               </div>
            <div className="join mx-auto mt-5">
  <input className="input input-bordered join-item" placeholder="Email"/>
  <button className="btn join-item bg-red-500 text-white rounded-r-full">Subscribe</button>
</div>
            </div>
          {/* before footer section */}
          <div>

        {/* Sculpture and Modeling section */}

<div className="text-center md:w-3/4 lg:w-[60%] mx-auto my-16 space-y-3">
  <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold">Exploring Sculpture and Modeling Techniques</h1>
  <p className="text-[#717D7D] ">Unlock the secrets of sculpting and modeling with our comprehensive guides and tutorials.</p>
</div>

<div className="mt-20 mb-60 grid gap-8 grid-cols-1 md:grid-cols-3">
  <div data-aos-delay="500" data-aos="fade-up" className="h-[450px] md:h-96 gap-3 bg-green-500 text-white p-5 flex flex-col justify-center items-center rounded-3xl">
    <h1 className="text-3xl font-bold">Clay Sculpture</h1>
    <p className="text-[#ffffff9d]">Discover the art of sculpting with clay through our expert tutorials and inspirational articles.</p>
    <button className="btn bg-white rounded-3xl">Browse Articles</button>
  </div>

  <div data-aos-delay="600" data-aos="zoom-in-up" className="h-[450px] md:h-96 gap-3 bg-[#262626] text-white p-5 flex flex-col justify-center items-center rounded-3xl">
    <h1 className="text-3xl font-bold">Stone Sculpture</h1>
    <p className="text-[#ffffff9d]">Learn the ancient art of stone carving and sculpting techniques with our detailed resources.</p>
    <button className="btn bg-white rounded-3xl">Explore Techniques</button>
  </div>

  <div data-aos-delay="700" data-aos="fade-up" className="h-[450px] md:h-96 bg-green-500 text-white gap-3 p-5 flex flex-col justify-center items-center rounded-3xl">
    <h1 className="text-3xl font-bold">Metal Sculpture</h1>
    <p className="text-[#ffffff9d]">Dive into the world of metal sculpting and welding with our step-by-step guides.</p>
    <div className="flex gap-8 text-3xl"><button><FaGooglePlay /></button>
                <button><FaApple /></button>
                <button><FaWindows /></button></div>
  </div>


</div>

          </div>
        </div>
    );
};

export default Home;
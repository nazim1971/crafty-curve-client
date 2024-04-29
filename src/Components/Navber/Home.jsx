import { useLoaderData } from "react-router-dom";
import Navber from "./Navber";
import Slider from "./Homepage/Slider";
import Footer from "../Footer/Footer";
import CraftItem from "./Homepage/CraftItem";
import ArtCraftCategory from "./Homepage/ArtCraftCategory";

const Home = () => {
    const creaftItem = useLoaderData()
    return (
        <div>
           {/* <Navber/> */}
           <div className="grid grid-cols-2 gap-5 my-20">
            <div className="flex flex-col justify-center space-y-4 w-[90%] ">
            <h1 className="text-5xl font-semibold ">
            Natural material sculpture.
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
            
          
        </div>
    );
};

export default Home;
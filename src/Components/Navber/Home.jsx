import { useLoaderData } from "react-router-dom";
import Navber from "./Navber";
import Slider from "./Homepage/Slider";
import Footer from "../Footer/Footer";
import CraftItem from "./Homepage/CraftItem";

const Home = () => {
    const creaftItem = useLoaderData()
    return (
        <div>
           <Navber/>
           <div className="grid grid-cols-2 my-20">
            <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, eligendi nam! Totam iusto dicta soluta molestias corrupti. Animi libero unde perferendis nostrum est ducimus veniam iure quae beatae, sapiente at?
            </h1>
            <Slider/>
           </div>
           <div className="grid grid-cols-3">
            {
                creaftItem.map(i=> <CraftItem key={i._id} i={i} /> )
            }
           </div>
           <h1>THhi is the one mosrt famous thing i ever seen</h1> 
            
           <Footer/>  
        </div>
    );
};

export default Home;
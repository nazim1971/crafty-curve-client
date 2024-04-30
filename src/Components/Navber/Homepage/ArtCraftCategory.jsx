import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import Aos from "aos";

const ArtCraftCategory = () => {

    useEffect(()=>{
        Aos.init()
      },[])


    
    const [subCat, setSubCat] = useState([]);

    useEffect(()=>{
        fetch("https://crafty-carve-server.vercel.app/subCategory")
        .then(res=> res.json())
        .then(data=> setSubCat(data))
    },[])
    console.log(subCat);
    

    return (
        <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
               
               {
                subCat.slice(0,6).map(i=>  <div data-aos-delay="300" data-aos="fade-right"  key={i._id} className="card  bg-base-100 shadow-xl">
                <figure><img className="h-80 w-full" src={i.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-semibold"> {i.subcategoryName} </h2>
                    <p >{i.shortDescription} </p>
                    <div className="card-actions justify-end">
                   <Link to={`/subCategory/${i.subcategoryName}`}> <button className="btn bg-green-500 text-white">Explore more </button></Link>
                    </div>
                </div>
                </div>)
               }
                
            </div>
        </div>
    );
};

export default ArtCraftCategory;
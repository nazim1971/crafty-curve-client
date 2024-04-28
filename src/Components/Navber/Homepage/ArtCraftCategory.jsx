import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ArtCraftCategory = () => {


    
    const [subCat, setSubCat] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/subCategory")
        .then(res=> res.json())
        .then(data=> setSubCat(data))
    },[])
    console.log(subCat);
    

    return (
        <div>
            <div className="text-4xl text-center p-5 my-20">
                All Categoried
            </div>
            <div className="grid grid-cols-3 gap-5">
               
               {
                subCat.slice(0,6).map(i=>  <div key={i._id} className="card  bg-base-100 shadow-xl">
                <figure><img className="h-80 w-full" src={i.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> {i.subcategoryName} </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                   <Link to={`/subCategory/${i.subcategoryName}`}> <button className="btn btn-primary">1</button></Link>
                    </div>
                </div>
                </div>)
               }
                
            </div>
        </div>
    );
};

export default ArtCraftCategory;
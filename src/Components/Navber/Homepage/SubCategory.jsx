import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navber from "../Navber";


const SubCategory = () => {
    const {id} = useParams();
    const [subCat, setSubCat] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/subCategory/${id}`)
        .then(res=> res.json())
        .then(data=> setSubCat(data))
    },[id])
    return (
        <div>
            <Navber/>
            This is my subcategory {subCat.length}

            <div>
                {
                    subCat.map(i=>  <div key={i._id} className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-80 w-full" src={i.image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> {i.subcategoryName} </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                       <Link to={`/subCatDetails/${i._id}`}> <button className="btn btn-primary">view Details</button></Link>
                        </div>
                    </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default SubCategory;
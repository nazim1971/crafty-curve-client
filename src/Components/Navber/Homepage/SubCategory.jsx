import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navber from "../Navber";
import { FaDollarSign, FaStar } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";


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
image
itemName
price
processingTime
rating
shortDescription
subcategoryName
            <div className="grid grid-cols-3 gap-5 my-20">
                {
                    subCat.map(i=>  <div key={i._id} className="p-3 h-[450px] rounded-2xl shadow-xl" style={{
                        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${i.image})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'}}>
                            <div className="text-white mt-[270px]">
                                <p className="text-2xl font-bold">{i.itemName} </p>
                               <div className="flex justify-between"> <p className="flex gap-2 items-center"> <FaDollarSign className="text-green-500" /> {i.price} </p>
                                <p className="flex gap-2 items-center"> <IoTimeSharp className="text-green-500" /> {i.processingTime} </p></div>
                                <div className="flex justify-between">
                                <p className="flex gap-2 items-center"> <FaStar  className="text-green-500" /> {i.rating} </p>
                                <p className="flex gap-2 items-center"> <MdDriveFileRenameOutline  className="text-green-500" /> {i.subcategoryName} </p>
                                </div>
                            </div>
                        <div className="p-4 flex justify-end" >
                       <Link to={`/subCatDetails/${i._id}`}> <button className="btn bg-green-500 text-white border-none">view Details</button></Link>
                        </div>
                   
                    </div>)
                }
            </div>
        </div>
    );
};

export default SubCategory;
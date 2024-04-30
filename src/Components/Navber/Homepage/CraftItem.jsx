
import { Link } from "react-router-dom";
import { MdCategory } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Aos from "aos";

const CraftItem = ({i}) => {

    useEffect(()=>{
        Aos.init()
      },[])


    const {_id, category, title,material,details,artist, image} = i;

    const handleViewDetails= _id=> {
        fetch(`https://crafty-carve-server.vercel.app/craftItems/${_id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }

 

    return (
        <div data-aos="fade-right" data-aos-delay="300" className=" h-96 flex flex-col justify-end bg-cover rounded-2xl p-3 "  style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'}}>
           
           <div className="text-white  ">
           <div className="space-y-1">
           <p className="text-2xl font-semibold"> {title} </p>
           <p className="flex gap-3"> <MdCategory className="text-green-500 text-2xl"/> <span className="text-[#ffffffce]">{category}</span> </p>
           <p className="flex gap-3"> <MdPeopleAlt className="text-green-500 text-2xl"/> <span className="text-[#ffffffce]">{artist}</span> </p>
           <div className="flex justify-end"><Link to={`/viewDetails/${_id}`} className="" ><button onClick={()=> handleViewDetails(_id)} className="btn bg-green-500 text-white border-none">View Details</button></Link></div>
           </div>
           </div>
           
        </div>
    );
};

export default CraftItem;
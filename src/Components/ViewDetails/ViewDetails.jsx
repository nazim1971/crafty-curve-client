import { useLoaderData } from "react-router-dom";
import { SiMaterialformkdocs } from "react-icons/si";
import { MdCategory, MdPeopleAlt } from "react-icons/md";
import { FaDatabase } from "react-icons/fa6";

const ViewDetails = () => {
    const viewDetails = useLoaderData()
    const { category, title,material,details,artist, image} = viewDetails;
    console.log(viewDetails);
    return (
        <div>
            
           <div className="grid gap-10 grid-cols-3 my-16">
           <div className="col-span-2">
            <img className="h-96 w-full rounded-2xl shadow-2xl " src={image} alt="" />
            </div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/m6vYv9V/bg-png-removebg-preview.png)'}} className="border bg-cover p-3 border-green-500 bg-white rounded-2xl" >
                <p className="text-3xl   font-semibold mt-10 mb-6 "> {title} </p>
                <hr />
                <div className="space-y-4 mt-3">
                <p className="flex gap-3 items-center"> <span><SiMaterialformkdocs className="text-green-500"/></span> <span className="text-[#0000009d] ">{material}</span></p>
                <p className="flex gap-3"> <MdCategory className="text-green-500 text-2xl"/> <span className="text-[#0000009d] ">{category}</span> </p>
           <p className="flex gap-3"> <MdPeopleAlt className="text-green-500 text-2xl"/> <span className="text-[#0000009d] ">{artist}</span> </p>
           <p className="flex gap-3"> <FaDatabase className="text-green-500 text-3xl"/> <span className="text-[#0000009d] ">{details}</span> </p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default ViewDetails; 
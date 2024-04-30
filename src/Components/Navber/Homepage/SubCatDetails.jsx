import { FaDollarSign, FaStar } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { useLoaderData } from "react-router-dom";


const SubCatDetails = () => {

    const subDetails = useLoaderData()


    return (
        <div >
            
            <div className="grid grid-cols-3 gap-10  my-20">
            <div className="col-span-2"><img className="h-96 w-full rounded-2xl " src={subDetails.image} alt="" /></div>
            <div style={{backgroundImage: 'url(https://i.ibb.co/m6vYv9V/bg-png-removebg-preview.png)'}} className="border bg-cover p-3 rounded-2xl border-green-500 bg-white pt-14">
                                <p className="text-2xl font-bold my-5 ">{subDetails.itemName} </p>
                                <hr />
                                <div className="space-y-3 mt-5"><p className="flex gap-2 items-center"> <FaDollarSign className="text-green-500" /> {subDetails.price} </p>
                                <p className="flex gap-2 items-center"> <IoTimeSharp className="text-green-500" /> {subDetails.processingTime} </p>
                                <p className="flex gap-2 items-center"> <FaStar  className="text-green-500" /> {subDetails.rating} </p>
                                <p className="flex gap-2 items-center"> <MdDriveFileRenameOutline  className="text-green-500" /> {subDetails.subcategoryName} </p>
                                <p className="flex gap-2 items-center"> <IoIosInformationCircle  className="text-green-500" /> {subDetails.shortDescription} </p>
                                </div>
                            </div>
        
            </div>
        
        
        </div>
    );
};

export default SubCatDetails;
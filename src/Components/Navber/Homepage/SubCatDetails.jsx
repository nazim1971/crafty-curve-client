import { useLoaderData } from "react-router-dom";
import Navber from "../Navber";


const SubCatDetails = () => {

    const subDetails = useLoaderData()
    return (
        <div>
            <Navber/>
        <p> {subDetails.shortDescription} </p>
        <p> {subDetails.subcategoryName} </p>
        
        </div>
    );
};

export default SubCatDetails;
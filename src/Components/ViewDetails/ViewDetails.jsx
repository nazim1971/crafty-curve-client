import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";

const ViewDetails = () => {
    const viewDetails = useLoaderData()
    console.log(viewDetails);
    return (
        <div>
            <Navber/>
            <img className="h-96 " src={viewDetails.image} alt="" />
            <p>
            Total data : {viewDetails.category}
            </p>
        </div>
    );
};

export default ViewDetails; 
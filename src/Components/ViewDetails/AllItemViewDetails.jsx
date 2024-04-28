import { useLoaderData } from "react-router-dom";
import Navber from "../Navber/Navber";

const AllItemViewDetails = () => {

    const allItemViewDetails = useLoaderData()
    return (
        <div>
            <Navber/>
                    <p>Item name: {allItemViewDetails.name} </p>
                    <p>Name: {allItemViewDetails.userName} </p>
                    <p>Email: {allItemViewDetails.email} </p>
                    <p>Coustomization: {allItemViewDetails.customization} </p>
        </div>
    );
};

export default AllItemViewDetails;
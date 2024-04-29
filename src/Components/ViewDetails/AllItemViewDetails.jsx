import { useLoaderData } from "react-router-dom";

const AllItemViewDetails = () => {

    const allItemViewDetails = useLoaderData()
    return (
        <div>
            
                    <p>Item name: {allItemViewDetails.name} </p>
                    <p>Name: {allItemViewDetails.userName} </p>
                    <p>Email: {allItemViewDetails.email} </p>
                    <p>Coustomization: {allItemViewDetails.customization} </p>
        </div>
    );
};

export default AllItemViewDetails;
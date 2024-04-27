import { Link } from "react-router-dom";


const CraftItem = ({i}) => {
    const {_id, category, title,material,details,artist, image} = i;

    const handleViewDetails= _id=> {
        fetch(`http://localhost:5000/craftItems/${_id}`)
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="border p-3 m-3 ">
            <img className="h-80 w-80" src={image} alt="" />
           <p>Title: {title} </p>
           <p> Category: {category} </p>
           <p>Material: {material} </p>
           <p> Details: {details} </p>
           <p> Artist: {artist} </p>
           <Link to={`/viewDetails/${_id}`} ><button onClick={()=> handleViewDetails(_id)} className="btn btn-secondary">View Details</button></Link>
        </div>
    );
};

export default CraftItem;
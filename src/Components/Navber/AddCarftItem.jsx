import { Link } from "react-router-dom";
import Navber from "./Navber";


const AddCarftItem = () => {
    return (
        <div>
            <Navber/>
            <Link to='/addItem'><button className="btn">Add Item</button></Link>
        </div>
    );
};

export default AddCarftItem;
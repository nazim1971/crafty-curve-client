import { Link } from "react-router-dom";
import Navber from "./Navber";

const Home = () => {
    return (
        <div>
           <Navber/>
           
           <h1>THhi is the one mosrt famous thing i ever seen</h1> 
           <Link to='/viewDetails'><button className="btn btn-secondary">View details</button></Link>    
        </div>
    );
};

export default Home;
import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div ><img className="w-80 mx-auto" src="https://i.ibb.co/TLD6sBS/200w.gif" alt="error img" /></div>
            <div className=" text-center">
            <Link to='/'><button className="btn btn-warning">Home</button></Link>   
            </div>
        </div>
    );
};

export default Error;
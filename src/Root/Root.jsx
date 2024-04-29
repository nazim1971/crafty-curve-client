import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navber from "../Components/Navber/Navber";

const Root = () => {
    return (
        <div >
          <Navber/>
         <div className="w-[92%] mx-auto">
          <Outlet/>
         </div>
          <Footer/>
        </div>
    );
};

export default Root;
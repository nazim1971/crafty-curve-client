import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="w-[92%] mx-auto">
          <Outlet/>
        </div>
    );
};

export default Root;
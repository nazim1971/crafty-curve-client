import { FaDollarSign, FaStar, FaStore } from "react-icons/fa6";
import { IoIosInformationCircle } from "react-icons/io";
import { IoTimeSharp } from "react-icons/io5";
import { MdDashboardCustomize, MdDriveFileRenameOutline } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const AllItemViewDetails = () => {
  const allItemViewDetails = useLoaderData();
  return (
    <div>
      <div data-aos="fade-right" className="grid grid-cols-3 gap-10  my-20">
        <div className="lg:col-span-2 col-span-3">
          <img
            className="h-96 w-full rounded-2xl "
            src={allItemViewDetails.photo}
            alt=""
          />
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://i.ibb.co/WDK6bxs/green-halftone-border-background.jpg)",
          }}
          className="border col-span-3 md:col-span-2 lg:col-span-1 p-3 rounded-2xl  bg-cover border-green-500 pt-14"
        >
          <p className="text-2xl font-bold my-5 ">{allItemViewDetails.name} </p>
          <hr />
          <div className="space-y-3 mt-5">
            <div className="flex gap-10">
              <p className="flex gap-2 items-center">
                {" "}
                <MdDriveFileRenameOutline className="text-green-500" />{" "}
                {allItemViewDetails.subcategoryName}{" "}
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <FaDollarSign className="text-green-500" />{" "}
                {allItemViewDetails.price}{" "}
              </p>
            </div>
            <div className="flex gap-10">
              <p className="flex gap-2 items-center">
                {" "}
                <IoTimeSharp className="text-green-500" />{" "}
                {allItemViewDetails.processingTime}{" "}
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <FaStar className="text-green-500" />{" "}
                {allItemViewDetails.rating}{" "}
              </p>
            </div>
            <p className="flex gap-2 items-center">
              {" "}
              <MdDashboardCustomize className="text-green-500" /> Customization:{" "}
              <span className="text-red-600">
                {" "}
                {allItemViewDetails.customization}
              </span>{" "}
            </p>
            <p className="flex gap-2 items-center">
              {" "}
              <FaStore className="text-green-500" /> In-Stock:{" "}
              <span className="text-red-600">
                {" "}
                {allItemViewDetails.stockStatus}
              </span>{" "}
            </p>

            <p className="flex gap-2 items-start">
              {" "}
              <span>
                <IoIosInformationCircle className="text-green-500" />
              </span>{" "}
              {allItemViewDetails.shortDescription}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllItemViewDetails;

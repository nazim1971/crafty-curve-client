import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { MdDashboardCustomize, MdDriveFileRenameOutline } from "react-icons/md";
import { FaDollarSign, FaStar, FaStore } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

const MyCarftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
  // filter
  const [filteredItems, setFilteredItems] = useState([]);
  // btn color
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    fetch(`https://crafty-carve-server.vercel.app/myItem/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        console.log(data, 'this is the oen');
        setFilteredItems(data);
      });
  }, [user]);

  // delete my item
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://crafty-carve-server.vercel.app/item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            const reminig = item.filter((i) => i._id !== _id);
            setItem(reminig);
            setFilteredItems(reminig);
          });
      }
    });
  };

     // Filter items by customization
  const handleFilter = (customization) => {
    setActiveButton(customization);
    if (customization === 'all') {
      setFilteredItems(item); // Set filtered items to all items fetched
    } else {
      const filtered = item.filter(item => item.customization === customization);
      setFilteredItems(filtered);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn btn-secondary"> Filter by customization </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
             <li>
              <button className={activeButton === 'yes' ? 'selected-item' : ''}  onClick={() => handleFilter('yes')}>Yes</button>
            </li>
            
             <li>
              <button
              className={activeButton === 'no' ? 'selected-item' : ''}
               onClick={() => handleFilter('no')}>no</button>
            </li>
            
             <li>
              <button
              className={activeButton === 'all' ? 'selected-item' : ''}
               onClick={() => handleFilter('all')}>All</button>
            </li>
            
            
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        
        {filteredItems.map(i => (
         
          <div key={i._id} className="card border  bg-base-100 shadow-xl">
            <figure>
              <img className="h-80 w-full" src={i.photo} alt="Shoes" />
            </figure>
            <div className="card-body bg-zinc-100">
              <p className="text-2xl font-bold mb-5  ">{i.name} </p>
              <hr />
              <div className="space-y-3">
                <div className="flex justify-between">
                <p className="flex gap-2 items-center">
                  {" "}
                  <MdDriveFileRenameOutline className="text-green-500" />{" "}
                  {i.subcategoryName}{" "}
                </p>
                <p className="flex gap-2 items-center">
                  {" "}
                  <FaDollarSign className="text-green-500" /> {i.price}{" "}
                </p>
                </div>
               <div className="flex justify-between">
               <p className="flex gap-2 items-center">
                  {" "}
                  <IoTimeSharp className="text-green-500" /> {i.processingTime}{" "}
                </p>
                <p className="flex gap-2 items-center">
                  {" "}
                  <FaStar className="text-green-500" /> {i.rating}{" "}
                </p>
               </div>
                <p className="flex gap-2 items-center">
                  {" "}
                  <MdDashboardCustomize className="text-green-500" />{" "}
                  Customization:{" "}
                  <span className="text-red-600"> {i.customization}</span>{" "}
                </p>
                <p className="flex gap-2 items-center">
                  {" "}
                  <FaStore className="text-green-500" /> In-Stock:{" "}
                  <span className="text-red-600"> {i.stockStatus}</span>{" "}
                </p>

                <p className="flex gap-2 items-start">
                  {" "}
                  <span>
                    <IoIosInformationCircle className="text-green-500" />
                  </span>{" "}
                  {i.shortDescription}{" "}
                </p>
              </div>
              <div className="card-actions justify-end">
              <Link to={`/updateData/${i._id}`}>
                  {" "}
                  <p className="btn bg-green-500 text-white">Update </p>
                </Link>
                <button
                  onClick={() => handleDelete(i._id)}
                  className="btn btn-warning"
                >
                  Delete{" "}
                </button>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCarftList;

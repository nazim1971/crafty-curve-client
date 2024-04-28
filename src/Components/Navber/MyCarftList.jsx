import Navber from "./Navber";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCarftList = () => {
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState([]);
//   const [filter, setFilter] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/myItem/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [user]);

//   useEffect(() => {
//     fetch(`http://localhost:5000/filter/${filter}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setItem(data);
//       });
//   }, [filter]);


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
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/item/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        }

        const reminig = item.filter((i) => i._id !== _id);
        setItem(reminig);
      });
        
      }
    });
    
  };

  return (
    <div>
      <Navber />
      <div className="flex justify-end">
        {/* <details className="dropdown dropdown-end">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
             <li>
              <button onClick={() => setFilter('yes')}>Yes</button>
            </li>
            <li>
              <button onClick={() => setFilter('no')}>No</button>
            </li>
            <li>
              <button onClick={() => setFilter('all')}>All</button>
            </li>
          </ul>
        </details> */}
      </div>
      <div>
        <h1 className="text-3xl">Thsi is my total data {item.length} </h1>
        {item.map((i, idx) => (
          <div className="p-5" key={i._id}>
            <p className="text-2xl">Data No: {idx + 1} </p>
            <img src="" alt="" />
            <p>Item Name: {i.name} </p>
            <p>Rating: {i.rating} </p>
            <p>Price: {i.Price} </p>
            <p>Coustomization: {i.customization} </p>
            <p>stockStatus: {i.stockStatus} </p>
            <p
              onClick={() => handleDelete(i._id)}
              className="btn btn-secondary"
            >
              Delete{" "}
            </p>
            <Link to={`/updateData/${i._id}`}>
              {" "}
              <p className="btn btn-warning">Update </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCarftList;

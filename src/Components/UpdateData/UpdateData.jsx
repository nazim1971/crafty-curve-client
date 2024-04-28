import { useForm } from "react-hook-form";
import Navber from "../Navber/Navber";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateData = () => {

    

    const updateData = useLoaderData()
    const {name,
        userName,
        subcategoryName,
        processingTime,
        price,
        rating,
        email,
        shortDescription,
        customization,
        stockStatus,
        photo
        } = updateData;
    console.log(updateData);
    const [selectedItem, setSelectedItem] = useState(customization)
    const [stockItem , setStockItem] = useState(stockStatus);    
    const {
        register,
        handleSubmit
      } = useForm();
      const onSubmit = (data) =>{
        data.customization = selectedItem;
        data.stockStatus= stockItem;
        console.log(data);
        fetch(`http://localhost:5000/item/${updateData._id}`,{
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
        if(data.modifiedCount){
            setSelectedItem(customization)
            setStockItem(stockStatus)
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            
        }
        })
    }
    const handleItemClick = (item) => {
        setSelectedItem(item);
        
      };
      const handleStockItem = (item) =>{
        setStockItem(item)
      }
      console.log(selectedItem);


    return (
        <div>
            <Navber/>

            <div>
      <h1 className="text-3xl">Add Item</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid grid-cols-2 gap-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Item Name</span>
            </div>
            <input
            {...register("name" ,{ required: true })}
            defaultValue={name}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">subcategory Name</span>
            </div>
            <input
            {...register("subcategoryName" ,{ required: true })}
              type="text"
              defaultValue={subcategoryName}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">processing time</span>
            </div>
            <input
            {...register("processingTime" ,{ required: true })}
              type="text"
              defaultValue={processingTime}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">price</span>
            </div>
            <input
            {...register("price" ,{ required: true })}
              type="text"
              defaultValue={price}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">rating</span>
            </div>
            <input
            {...register("rating" ,{ required: true })}
              type="text"
              defaultValue={rating}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Photo</span>
            </div>
            <input
            {...register("photo" ,{ required: true })}
              type="text"
              defaultValue={photo}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          
          <details className="dropdown">
            <summary className="m-1 btn">customization</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><button onClick={() =>handleItemClick("yes")}
                 className={selectedItem === "yes" ? "selected-item" : ""}
                >Yes</button></li>
                <li><button  onClick={() => handleItemClick("no")}
                 className={selectedItem === "no" ? "selected-item" : ""}
                >No</button></li>
             
            </ul>
            </details>

            <details className="dropdown">
            <summary className="m-1 btn">stockStatus</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><button required onClick={() => handleStockItem("inStock")}
                 className={stockItem === "inStock" ? "selected-item" : ""}
                >In stock</button></li>
                <li><button required onClick={() => handleStockItem("madeToOrder")}
                 className={stockItem === "madeToOrder" ? "selected-item" : ""}
                >Made To Order</button></li>
             
            </ul>
            </details>
          
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">User Name</span>
            </div>
            <input
            {...register("userName")}
            value={userName}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">User Email</span>
            </div>
            <input
            {...register("email")}
            value={email}
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control  w-full ">
            <div className="label">
              <span className="label-text">short description</span>
            </div>
            <input
            {...register("shortDescription" ,{ required: true })}
              type="text"
              defaultValue={shortDescription}
              placeholder="Type here"
              className="input  input-bordered w-full "
            />
          </label>
          <input className="btn col-span-2 w-full bg-red-500 my-8" type="submit" value="Update item" />
        </div>
      </form>

    
    </div>
            
        </div>
    );
};

export default UpdateData;
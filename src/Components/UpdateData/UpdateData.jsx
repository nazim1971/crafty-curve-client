import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
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

    const [selectedItem, setSelectedItem] = useState(customization)
    const [stockItem , setStockItem] = useState(stockStatus); 

  

    const {
        register,
        handleSubmit
      } = useForm();

      useEffect(() => {
    }, [customization, stockStatus]);

      const onSubmit = (data) =>{

        
        data.customization = selectedItem;
        data.stockStatus= stockItem;
        console.log(data);
        fetch(`https://crafty-carve-server.vercel.app/item/${updateData._id}`,{
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


    return (
        <div>

            <div className="w-[92%] mx-auto my-20">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="grid grid-cols-2 gap-5">
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold ">Item Name</span>
            </div>
            <input
            {...register("name" ,{ required: true })}
            defaultValue={name}
              type="text"
              placeholder="Type here"
              className="input border-green-500  input-bordered w-full "
            />
          </label>
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">subcategory Name</span>
            </div>
            <input
            {...register("subcategoryName" ,{ required: true })}
              type="text"
              defaultValue={subcategoryName}
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">processing time</span>
            </div>
            <input
            {...register("processingTime" ,{ required: true })}
              type="text"
              defaultValue={processingTime}
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">price</span>
            </div>
            <input
            {...register("price" ,{ required: true })}
              type="text"
              defaultValue={price}
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">rating</span>
            </div>
            <input
            {...register("rating" ,{ required: true })}
              type="text"
              defaultValue={rating}
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">Photo</span>
            </div>
            <input
            {...register("photo" ,{ required: true })}
              type="text"
              defaultValue={photo}
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          
          <details className="dropdown">
            <summary className="m-1 btn bg-red-500 text-white">customization</summary>
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
            <summary className="m-1 btn bg-red-500 text-white">stockStatus</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><button onClick={() => handleStockItem("inStock")}
                 className={stockItem === "inStock" ? "selected-item" : ""}
                >In stock</button></li>
                <li><button  onClick={() => handleStockItem("madeToOrder")}
                 className={stockItem === "madeToOrder" ? "selected-item" : ""}
                >Made To Order</button></li>
             
            </ul>
            </details>
          
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">User Name</span>
            </div>
            <input
            {...register("userName")}
            value={userName}
              type="text"
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          <label className="form-control w-full col-span-2 md:col-span-1">
            <div className="label">
              <span className="label-text font-semibold">User Email</span>
            </div>
            <input
            {...register("email")}
            value={email}
              type="email"
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          <label className="form-control  w-full col-span-2 ">
            <div className="label">
              <span className="label-text font-semibold">short description</span>
            </div>
            <input
            {...register("shortDescription" ,{ required: true })}
              type="text"
              defaultValue={shortDescription}
              placeholder="Type here"
              className="input border-green-500 input-bordered w-full "
            />
          </label>
          <input className="btn text-white col-span-2 w-full bg-green-500 my-8" type="submit" value="Update item" />
        </div>
      </form>

    
    </div>
            
        </div>
    );
};

export default UpdateData;
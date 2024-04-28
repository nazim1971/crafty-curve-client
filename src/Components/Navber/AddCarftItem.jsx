import { useContext, useState } from "react";
import Navber from "./Navber";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";


const AddCarftItem = () => {

    const [selectedItem, setSelectedItem] = useState("no")
    const [stockItem , setStockItem] = useState('inStock');

    const {user} = useContext(AuthContext)
    const email = user ? user.email : "";
    const userName = user ? user.displayName : "";

        // react hook form
        const {
            register,
            handleSubmit,
            reset
          } = useForm()
          const onSubmit = (data) => {
           data.customization = selectedItem;
           data.stockStatus = stockItem;
            
            // send data to the server site
        fetch('http://localhost:5000/ownItem',{
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data=> {console.log(data)
        if(data.insertedId){
            alert('Product added successfully')
            reset()
        }
        })
           
            console.log(data);
            }

            const handleItemClick = (item) => {
                
                setSelectedItem(item);
                
              };
              console.log(selectedItem);
              const handleStockItem = (item) =>{
                setStockItem(item)
              }

              console.log(stockItem);




    

       

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
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          
          <details className="dropdown">
            <summary className="m-1 btn">customization</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><button required onClick={() => handleItemClick("yes")}
                 className={selectedItem === "yes" ? "selected-item" : ""}
                >Yes</button></li>
                <li><button required onClick={() => handleItemClick("no")}
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
              placeholder="Type here"
              className="input  input-bordered w-full "
            />
          </label>
          <input className="btn col-span-2 w-full bg-red-500 my-8" type="submit" value="Add Item" />
        </div>
      </form>

    
    </div>
        </div>
    );
};

export default AddCarftItem;
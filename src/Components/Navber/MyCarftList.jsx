import Navber from "./Navber";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyCarftList = () => {
    
    const {user } = useContext(AuthContext);
    const [item, setItem] = useState([])
    useEffect(()=> {
       
            fetch(`http://localhost:5000/myItem/${user.email}`)
                .then(res => res.json())
                .then(data => {
                     setItem(data)
                })
    },[user]);

    // delete my item
    const handleDelete = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/item/${_id}`, {
           method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
          
            if(data.deletedCount > 0){
                alert('Item deleted successfully')
            }
           
            const reminig = item.filter(i => i._id !== _id);
                setItem(reminig);
        })
        
    }


    return (
        <div>
            <Navber/>
           <div>
           <h1 className="text-3xl">Thsi is my total data {item.length} </h1>
            {
            item.map((i,idx)=> <div className="p-5" key={i._id}>
                    <p className="text-2xl">Data No: {idx+1} </p>
                    <p>Item Name: {i.name} </p>
                    <p>Name: {i.userName} </p>
                    <p>Email: {i.email} </p>
                    <p>Coustomization: {i.customization} </p>
                    <p onClick={()=>handleDelete(i._id)} className="btn btn-secondary">Delete </p>
                   <Link to={`/updateData/${i._id}`}> <p  className="btn btn-warning">Update </p></Link>
                    
                </div>)
            }
           </div>
        </div>
    );
};

export default MyCarftList;
import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {

    const allItem = useLoaderData()

    return (
        <div>
            
            {
            allItem.map((i,idx)=> <div className="p-5" key={i._id}>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th className="hidden md:inline">Price</th>
        <th>subcategoryName</th>
        <th className="hidden md:inline">stockStatus</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx+1} </th>
        <td>{i.userName} </td>
        <td className="hidden md:inline">{i.price}</td>
        <td>{i.subcategoryName} </td>
        <td className="hidden md:inline">{i.stockStatus} </td>
        <td><Link to={`/allItemViewDetails/${i._id}`}> <p  className="btn btn-warning">View Details </p></Link></td>
      </tr>
      
    </tbody>
  </table>
</div>
                    
                </div>)
            }
        </div>
    );
};

export default AllArtCraft;
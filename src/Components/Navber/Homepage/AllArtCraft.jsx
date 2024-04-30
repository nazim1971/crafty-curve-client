import { Link, useLoaderData } from "react-router-dom";

const AllArtCraft = () => {

    const allItem = useLoaderData()
    console.log(allItem);

    return (
        <div>
            <h1 className="text-3xl">Thsi is my total data {allItem.length} </h1>
            {
            allItem.map((i,idx)=> <div className="p-5" key={i._id}>
                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Price</th>
        <th>subcategoryName</th>
        <th>stockStatus</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>{idx+1} </th>
        <td>{i.userName} </td>
        <td>{i.price}</td>
        <td>{i.subcategoryName} </td>
        <td>{i.stockStatus} </td>
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
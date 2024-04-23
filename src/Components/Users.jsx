import { Link, useLoaderData } from "react-router-dom";
import '../App.css'
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";

const Users = () => {
    let userLoader = useLoaderData()
    let [user, setUser] = useState(userLoader)
    let handleUserDelet = (id) => {
        console.log(id)
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
            fetch(`http://localhost:5000/users/${id}`, {
              method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
              console.log(data)
              if(data.deletedCount > 0){
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
                let deleteUser = user.filter(user => user._id !== id)
                setUser(deleteUser)
              }
            })
          }
        });

    }    
    return (
        <div className="w-[95%] md:w-[80%] mx-auto mt-28">

<div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Update User</th>
              <th>Delete User</th>
            </tr>
          </thead>
          {
        user.map((user, index) => <tbody className="raleway" key={index}>
        <tr>
          <td className="font-semibold">{index + 1}</td>
          <td>{user.email}</td>
          <td>{user.usercreationTime}</td>
          <td><Link to={`/updateUsers/${user._id}`}><button className="btn bg-[#3C393B]"><HiPencil className='text-[18px] text-white' /></button></Link></td>
          <td><button onClick={() => handleUserDelet(user._id)} className="btn bg-[#EA4744]"><MdDelete className='text-[18px] text-white' /></button></td> 
        </tr>
      </tbody>)
     }
        </table>
      </div>    
</div>
    );
};

export default Users;
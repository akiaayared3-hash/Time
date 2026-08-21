import "./list.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import {useState, useEffect } from "react";

const List = ({url}) => {

const [list, setList] = useState([])
const fetchList = async () => {
  try {
    const response = await axios.get(`${url}/list`);
    //console.log(response.data)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error loading foods");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server error");
  }
};

useEffect(()=> {
  fetchList()
}, [])

const removeFood = async (id) => {
  try {
    const response = await axios.delete(`${url}/remove/${id}`);

    if (response.data.success) {
      toast.success("Food removed");
      fetchList();
    } else {
      toast.error("Delete failed");
    }
  } catch (error) {
    console.error(error);
    toast.error("Server error");
  }
};

  return (
    <div className="list">
      <h2>Food List</h2>

      <div className="table">
        <div className="table-header">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>

        {list.map((item) => (
          <div className="table-row" key={item.id}>
            <img
              src={`http://localhost:3000/uploads/${item.image}`}
              alt={item.name}
            />

            <p>{item.name}</p>

            <p>{item.category}</p>

            <p>{item.price} ETB</p>

            <button onClick={()=>removeFood(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;

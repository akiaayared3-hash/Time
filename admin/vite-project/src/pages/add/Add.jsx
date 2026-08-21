import { useState } from "react";
import { assets } from "../../assets/assets";
import "./add.css";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Burger",
  });

  const eventHandler = (event) => {
    const { name, value } = event.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post(`${url}/add`, formData);

      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: "Burger",
        });

        setImage(false);
        toast.success(response.data.message)

      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="add">
      <form className="add-form" onSubmit={onSubmitHandler}>
        {/* Upload Image */}

        <div className="add-img-upload">
          <p>Upload Image</p>

          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="Upload"
            />
          </label>

          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Product Name */}

        <div className="form-group">
          <label>Product Name</label>

          <input
            name="name"
            type="text"
            placeholder="Type here..."
            value={data.name}
            onChange={eventHandler}
            required
          />
        </div>

        {/* Description */}

        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            rows="6"
            placeholder="Write food description..."
            value={data.description}
            onChange={eventHandler}
            required
          ></textarea>
        </div>

        {/* Category & Price */}

        <div className="form-row">
          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={data.category}
              onChange={eventHandler}
            >
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Drinks">Drinks</option>
              <option value="Desserts">Desserts</option>
              <option value="Fries">Fries</option>
            </select>
          </div>

          <div className="form-group">
            <label>Price (ETB)</label>

            <input
              name="price"
              type="number"
              placeholder="200"
              value={data.price}
              onChange={eventHandler}
              required
            />
          </div>
        </div>

        {/* Submit */}

        <button className="add-btn" type="submit">
          ADD FOOD
        </button>
      </form>
    </div>
  );
};

export default Add;

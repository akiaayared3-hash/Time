import "./orders.css";
import { assets } from "../../assets/assets";

const Orders = () => {
  const orders = [
    {
      id: 1,
      customer: "Yared",
      address: "Addis Ababa",
      total: 700,
      status: "Food Processing",
    },
    {
      id: 2,
      customer: "Abel",
      address: "Adama",
      total: 450,
      status: "Out for Delivery",
    },
  ];

  return (
    <div className="orders">
      <h2>Orders</h2>

      {orders.map((order) => (
        <div className="order-card" key={order.id}>
          <img src={assets.parcel_icon} alt="" />

          <div className="order-info">
            <h3>{order.customer}</h3>

            <p>{order.address}</p>

            <p>Total: {order.total} ETB</p>
          </div>

          <select defaultValue={order.status}>
            <option>Food Processing</option>

            <option>Out for Delivery</option>

            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
};

export default Orders;

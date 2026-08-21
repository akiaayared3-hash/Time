import React, { useContext, useEffect, useState } from "react";
import "./myOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/userorders`, {
        headers: { token },
      });
      if (response.data.success) {
        setData(response.data.orders);
      }
    } catch (error) {
      console.error("Error fetching user orders:", error);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="orders-page-wrapper">
      <div className="orders-content-container">
        <header className="orders-page-header">
          <h2>My Orders</h2>
          <p>Track your recent food orders and real-time statuses</p>
        </header>

        <div className="my-orders-list">
          {data.length === 0 ? (
            <div className="no-orders-card">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#666"
                strokeWidth="1.5"
              >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              <h3>No orders placed yet</h3>
              <p>When you order items from our menu, they will appear here.</p>
            </div>
          ) : (
            data.map((order, index) => {
              const statusText =
                order.orderStatus || order.order_status || "Food Processing";

              return (
                <div key={index} className="order-item-card">
                  <div className="order-icon-box">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d4af37"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>

                  <div className="order-details-col">
                    <p className="order-food-names">
                      {order.items.map((item, itemIdx) => {
                        if (itemIdx === order.items.length - 1) {
                          return `${item.name} x ${item.quantity}`;
                        } else {
                          return `${item.name} x ${item.quantity}, `;
                        }
                      })}
                    </p>
                    <span className="order-meta-info">
                      {order.items.length}{" "}
                      {order.items.length === 1 ? "Item" : "Items"}
                    </span>
                  </div>

                  <div className="order-price-col">
                    <span className="price-label">Total Paid</span>
                    <span className="price-amount">
                      {order.totalAmount || order.total_amount} ETB
                    </span>
                  </div>

                  <div className="order-status-col">
                    <span className="status-badge">
                      <span className="status-pulse"></span>
                      {statusText}
                    </span>
                  </div>

                  <div className="order-action-col">
                    <button className="track-btn" onClick={fetchOrders}>
                      Track Order
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

import "./user.css";
import { assets } from "../../assets/assets";

const Users = () => {
  const users = [
    {
      id: 1,
      image: assets.profile_image,
      name: "Yared Ababu",
      email: "yared@gmail.com",
      phone: "+251900000001",
    },
    {
      id: 2,
      image: assets.profile_image,
      name: "Abel Tadesse",
      email: "abel@gmail.com",
      phone: "+251900000002",
    },
    {
      id: 3,
      image: assets.profile_image,
      name: "Sara Ali",
      email: "sara@gmail.com",
      phone: "+251900000003",
    },
  ];

  return (
    <div className="users">
      <h2>Users</h2>

      <div className="users-table">
        <div className="users-header">
          <p>Photo</p>
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Action</p>
        </div>

        {users.map((user) => (
          <div className="users-row" key={user.id}>
            <img src={user.image} alt={user.name} />

            <p>{user.name}</p>

            <p>{user.email}</p>

            <p>{user.phone}</p>

            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;

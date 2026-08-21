
import './App.css'
import NavBar from '../src/component/navBar/NavBar'
import SidBar from '../src/component/sidBar/SidBar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/add/Add'
import List from "./pages/list/List";
import Order from "./pages/orders/Orders";
import Users from "./pages/users/Users";
import { ToastContainer} from "react-toastify";



function App() {
  const url = "http://localhost:3000/api/foods";

  return (
    <>
      <ToastContainer />
      <NavBar />
      <hr />

      <div className="app-content">
        <SidBar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
          <Route path="/user" element={<Users url={url} />} />
        </Routes>
      </div>
    </>
  );
}

export default App

import { Route, Routes } from "react-router-dom"
import Index from '../../assets/pages/index/Index'
import About from "../../assets/pages/about/About";
import Menu from "../../assets/pages/menu/Menu";
import Categories from "../../assets/pages/categories/Categories";
import Contact from "../../assets/pages/contact/Contact";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Routing

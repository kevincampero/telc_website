import { Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout'; 
import Home from '../pages/Home'; 
import Blog from '../pages/Blog'; 
import About from '../pages/About';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses'; 
import Default from '../pages/Default';

function CustomLayout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="blog" element={<Blog />}></Route>
          <Route path="nosotros" element={<About />}></Route>
          <Route path="contacto" element={<Contact />}></Route>
          <Route path="cursos" element={<Courses />}></Route>
          <Route path="*" element={<Default />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default CustomLayout;
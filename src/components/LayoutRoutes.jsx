import { Routes, Route } from "react-router-dom";
import Layout from '../pages/Layout'; 
import Home from '../pages/Home'; 
import Blog from '../pages/Blog'; 
import Article from '../pages/Article'; 
import About from '../pages/About';
import Contact from '../pages/Contact';
import Courses from '../pages/Courses'; 
import Default from '../pages/Default';

function CustomLayout() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<Article />} />
        <Route path="nosotros" element={<About />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="cursos" element={<Courses />} />
        <Route path="*" element={<Default />} />
      </Route>
    </Routes>
  );
}

export default CustomLayout;

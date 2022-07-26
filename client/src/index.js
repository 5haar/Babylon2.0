import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Clothing from "./components/routes/clothing";
import Shoes from "./components/routes/shoes";
import Watches from "./components/routes/watches";
import Accessories from "./components/routes/accessories";
import Blog from "./components/routes/blog";
import About from "./components/routes/about";
import Contact from "./components/routes/contact";



const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="clothing" element={<Clothing />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="watches" element={<Watches />} />
      <Route path="accessories" element={<Accessories />} />
      <Route path="blog" element={<Blog />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>
);

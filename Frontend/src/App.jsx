import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Services from "./Pages/Services";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

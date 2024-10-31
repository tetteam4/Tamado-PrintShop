import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
<<<<<<< HEAD
import Blog from "./Pages/Blog";
import About from "./Pages/About";
import Services from "./Pages/Services";
=======
import Blog from "./Components/Blog/Blog";
import Dashboard from './Components/dashboard/dashboard.jsx'
>>>>>>> 410950b7bfe2cb69216424f8fa9bd15aa3e7a185
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
<<<<<<< HEAD
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
=======
            <Route path="/dashboard" element={<Dashboard role='Reception' />} />
>>>>>>> 410950b7bfe2cb69216424f8fa9bd15aa3e7a185
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

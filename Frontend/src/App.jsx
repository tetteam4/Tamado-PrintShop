import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Blog from "./Components/Blog/Blog";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

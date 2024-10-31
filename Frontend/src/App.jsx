import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import Blog from "./Components/Blog/Blog";
import Dashboard from './Components/dashboard/dashboard.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
          </Route>
            <Route path="/dashboard" element={<Dashboard role='Admin' />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

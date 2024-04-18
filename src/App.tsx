import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Blog from "./Pages/BlogShow";
import BlogSection from "./Pages/BlogSection";
import NewBlog from "./Pages/NewBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/createblog" element={<NewBlog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

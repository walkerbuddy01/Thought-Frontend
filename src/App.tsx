import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Blog from "./Pages/BlogShow";
import BlogSection from "./Pages/BlogSection";
import NewBlog from "./Pages/NewBlog";
import AuthLayout from "./Pages/AuthLayout";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { BackendUrl } from "./config/config";
import { login, logout } from "../store/AuthSlice";
import Dashboard from "./Pages/Dashboard";
import { Progress } from "./Components/ui/progress";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios({
      method: "get",
      headers: { Authorization: token },
      url: `${BackendUrl}/user/getCurrentUser`,
    })
      .then((response) => dispatch(login(response.data)))
      .catch(() => dispatch(logout()))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Progress value={33} />
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AuthLayout children={<Signup />} authentication={false} />
            }
          />
          <Route
            path="/signup"
            element={
              <AuthLayout children={<Signup />} authentication={false} />
            }
          />
          <Route
            path="/signin"
            element={
              <AuthLayout children={<Signin />} authentication={false} />
            }
          />
          <Route
            path="/blog"
            element={
              <AuthLayout children={<BlogSection />} authentication={true} />
            }
          />
          <Route
            path="/blog/:id"
            element={<AuthLayout children={<Blog />} authentication={true} />}
          />
          <Route
            path="/createblog"
            element={
              <AuthLayout children={<NewBlog />} authentication={true} />
            }
          />
          <Route
            path="/dashboard"
            element={
              <AuthLayout children={<Dashboard />} authentication={true} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

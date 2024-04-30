import Appbar from "@/Components/Appbar";
import BlogCard from "@/Components/BlogCard";
import DockNavigation from "@/Components/DockNavigation";
import BlogSkeleton from "@/Components/Skeletons/BlogSkeleton";
import NumberTicker from "@/Components/magicui/number-ticker";
import { Separator } from "@/Components/ui/separator";
import { BackendUrl } from "@/config/config";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const userDetail = useSelector((state: any) => state.auth.userData);
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setloading(true);
    axios({
      method: "get",
      headers: { Authorization: localStorage.getItem("token") },
      url: `${BackendUrl}/user/getCUB`,
    })
      .then((response) => setData(response.data.blog))
      .catch((error) => console.log(error))
      .finally(() => setloading(false));
  }, []);

  return (
    <div className="w-full h-full">
      <Appbar />

      <div>
        <div className="w-full h-full">
          <div className="sm:grid sm:grid-cols-5 items-center">
            <h1 className="text-4xl p-4 sm:col-span-1 ">
              {userDetail.username}
            </h1>

            <h3 className="col-span-4  text-xl font-medium p-5">
              Total Blogs : {loading ? <div><NumberTicker value={150} direction="down" /></div> : data.length}
            </h3>
          </div>
          <Separator />
        </div>
        <DockNavigation />
        <Separator />
        <div>
          {loading ? (
            <div className="flex flex-col gap-2 p-2">
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
              <BlogSkeleton />
            </div>
          ) : (
            data.map((blog: any) => (
              <div key={blog.id}>
                <Link to={`/blog/${blog.id}`}>
                  <BlogCard
                    username={userDetail.username}
                    date={blog.createdAt}
                    title={blog.title}
                    content={blog.content}
                  />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;

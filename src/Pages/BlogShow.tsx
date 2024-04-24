import {  useParams } from "react-router-dom";
import Appbar from "../Components/Appbar";
import { Avatar } from "../Components/Avatar";
import { useGetBlog } from "../Hook/useGetBlog";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useGetBlog({ id });
  // const location = useLocation();

  return (
    <div className=" overflow-hidden h-screen w-screen">
      <Appbar/>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="grid md:grid-cols-10 h-[90%] w-full overflow-y-scroll overflow-x-hidden">
          <div
            className=" sm:col-span-7
            border-b 
          md:border-r"
          >
            <div className="text-3xl md:text-6xl font-extrabold p-4">
              {blog.title}{" "}
            </div>
            <div className=" text-lg p-3">{blog.content}</div>
          </div>
          <div className="sm:col-span-3 p-2">
            <div className="text-left px-2 font-bold">Author</div>
            <div className="flex items-center ">
              <Avatar size="large" authorname={blog.user.username} />
              <div className="p-3">
                <div className="text-xl font-extrabold">
                  {blog.user.username}
                </div>
                <div className="text-sm">{blog.user.description}</div>
              </div>
            </div>
            <div className="bg-slate-200 text-black/60 p-2 px-4 text-xs rounded-2xl">
              {`${Math.ceil(blog.content.length / 100)} min read`}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Blog;

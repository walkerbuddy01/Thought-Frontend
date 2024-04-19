import { Link } from "react-router-dom";
import Appbar from "../Components/Appbar";
import BlogCard from "../Components/BlogCard";
import { useBlog } from "../Hook/UseBlog";

interface blogType {
  user: {
    username: string;
  };
  title: string;
  content: string;
  userId: number;
  id: number;
}
function BlogSection() {
  const { loading, blogs } = useBlog({ page: 1, limit: 100 });

  return (
    <div className="overflow-hidden h-screen ">
      <Appbar authorname="Karan" />

      {loading ? (
        <div>loading...</div>
      ) : (
        <div className=" md:flex md:justify-center h-[90%]   ">
          <div className=" max-w-screen-sm h-full  overflow-x-hidden  scrollbar-thumb-rounded-full scrollbar-hide ">
            {blogs.map((blog: blogType) => (
              <div key={blog.id}>
                <Link to={`/blog/${blog.id}`}>
                  <BlogCard
                    username={blog.user.username}
                    date="Dec 3,2023"
                    title={blog.title}
                    content={blog.content}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlogSection;

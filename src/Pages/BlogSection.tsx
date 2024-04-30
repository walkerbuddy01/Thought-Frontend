import { Link } from "react-router-dom";
import Appbar from "../Components/Appbar";
import BlogCard from "../Components/BlogCard";
import { useBlog } from "../Hook/UseBlog";
import BlogSkeleton from "../Components/Skeletons/BlogSkeleton";
import DockNavigation from "@/Components/DockNavigation";

interface blogType {
  user: {
    username: string;
    name: string;
    description: string;
    blog: string[];
  };
  title: string;
  content: string;
  userId: number;
  id: number;
  createdAt: Date;
}
function BlogSection() {
  const { loading, blogs } = useBlog({ page: 1, limit: 100 });

  return (
    <div className="overflow-hidden  h-screen ">
      <Appbar />
      <DockNavigation className="hidden sm:flex" />

      {loading ? (
        <div className=" md:flex md:justify-center h-[90%] w-full ">
          <div
            role="status"
            className="p-4 space-y-4   divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700 w-full 
            
            sm:max-w-screen-sm h-full  overflow-x-hidden  scrollbar-thumb-rounded-full scrollbar-hide 
            "
          >
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      ) : (
        <div className=" md:flex md:justify-center h-[82%] sm:h-[75%]    ">
          <div className="space-y-5   rounded shadow sm:max-w-screen-sm h-full  overflow-x-hidden  scrollbar-thumb-rounded-full scrollbar-hide ">
            {blogs.map((blog: blogType) => (
              <div key={blog.id}>
                <Link to={`/blog/${blog.id}`}>
                  <BlogCard
                    username={blog.user.name}
                    date={`${blog.createdAt}`}
                    title={blog.title}
                    content={blog.content}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      <DockNavigation className="flex sm:hidden" />
    </div>
  );
}

export default BlogSection;

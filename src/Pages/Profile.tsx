import Appbar from "@/Components/Appbar";
import BlogCard from "@/Components/BlogCard";
import { Separator } from "@/Components/ui/separator";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export interface RootState {
  auth: {
    userData: {
      id: number;
      username: string;
      name: string;
      email: string;
      description: string;
      blog: Array<{
        id: number;
        title: string;
        content: string;
        isPublished: boolean;
        createdAt: string;
        userId: number;
      }>;
    };
  };
}

function Profile() {
  const userDetail: any = useSelector(
    (state: RootState) => state.auth.userData
  );
  let blogs = userDetail.blog;

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
              Total Blogs : {userDetail?.blog.length}
            </h3>
          </div>
          <Separator />
        </div>
        <div>
          {blogs.map((blog: any) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;

{
  /* <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div> */
}

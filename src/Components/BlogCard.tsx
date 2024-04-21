import { Avatar } from "./Avatar";

interface BlogCardProps {
  username: string;
  date: string;
  title: string;
  content: string;
}

function BlogCard({ username = "user", date, title, content }: BlogCardProps) {
  return (
    <div className="w-full  border-b p-3 md:p-5  ">
      <div className="flex py-2">
        <div className="flex flex-col justify-center pr-2 ">
          <Avatar authorname={username} size="small" />
        </div>
        <div className="text-sm font-bold flex flex-col justify-center">
          {username}
        </div>
        <div className="flex flex-cols justify-center p-1 text-xs">&#9661;</div>
        <div className=" flex flex-col justify-center text-xs">
          {" "}
          {`${date}`}
        </div>
      </div>
      <div className="text-lg md:text-xl font-semibold">{title}</div>
      <div className=" text-base w-[90%]">{`${content.slice(0, 80)}.....`}</div>
      <div
        className="text-sm font-medium 
       text-slate-500"
      >
        {Math.ceil(content.length / 100)} min read
      </div>
    </div>
  );
}

export default BlogCard;

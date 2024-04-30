import { Dock, DockIcon } from "@/Components/magicui/dock";
import { IoCreateOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";

function DockNavigation(): JSX.Element {
  const Icons = {
    createBlog: () => <IoCreateOutline size={"1.5em"} />,
    home: () => <GoHome size={"1.5em"} />,
    profile: () => <CiUser size={"1.5em"} />,
  };
  return (
    <div className=" flex h-[80px] w-full flex-cols items-center justify-center overflow-hidden rounded-lg  ">
      <Dock>
        <DockIcon>
          <Link to={"/blog"}>
            <Icons.home />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link to={"/createblog"}>
            <Icons.createBlog />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link to={"/yourprofile"}>
            <Icons.profile />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}

export default DockNavigation;

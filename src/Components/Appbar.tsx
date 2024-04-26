import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "./Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { TbLogout2 } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineCreate } from "react-icons/md";
import { logout } from "../../store/AuthSlice";

function Appbar({ buttonNeeded = true }: { buttonNeeded?: boolean }) {
  const userData = useSelector((state: any) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border-b p-3">
      <Link to={"/blog"}>
        <div className="font-semibold">Medium</div>
      </Link>
      {buttonNeeded && (
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-slate-400"
          onClick={() => {
            navigate("/createblog");
          }}
        >
          <MdOutlineCreate />
          <span className="ml-3">New blog</span>
        </button>
      )}
      {/* //Adding  */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          {" "}
          <Avatar authorname={userData.username} size="large" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{userData.username}</DropdownMenuLabel>
          <DropdownMenuLabel>{userData.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={"/dashboard"}>
            <DropdownMenuItem>
              <LuLayoutDashboard />
              <span className="ml-2">Dashboard</span>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            onClick={() => {
              localStorage.setItem("token", "");

              navigate("/signin");
              dispatch(logout());
            }}
          >
            <TbLogout2 />
            <span className="ml-2">Logout</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* //Adding  */}
    </div>
  );
}

export default Appbar;

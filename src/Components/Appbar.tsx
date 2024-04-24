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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/AuthSlice";

function Appbar() {
  const userData = useSelector((state: any) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="flex justify-between border-b p-3">
      <Link to={"/blog"}>
        <div className="font-semibold">Medium</div>
      </Link>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-slate-400"
        onClick={() => {
          navigate("/createblog");
        }}
      >
        New blog
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>

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
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              localStorage.setItem("token", "");

              navigate("/signin");
              dispatch(logout());
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* //Adding  */}
    </div>
  );
}

export default Appbar;

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
import { logout } from "../../store/AuthSlice";
import { IoAddCircleOutline } from "react-icons/io5";

function Appbar({ buttonNeeded = true }: { buttonNeeded?: boolean }) {
  const userData = useSelector((state: any) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between border-b p-3">
      <Link to={"/blog"}>
        <div className="w-24">


          <img
            src=" /public/static/images/thought.png"
            alt="thought"
            className="w-full"
          />

        </div>
      </Link>
      <div className="flex items-center gap-4">
        {buttonNeeded && (
          <IoAddCircleOutline
            size="2em"
            onClick={() => {
              navigate("/createblog");
            }}
          />
        )}
        {/* //Adding  */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            {" "}
            <Avatar authorname={userData?.username} size="large" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>{userData?.username}</DropdownMenuLabel>
            <DropdownMenuLabel>{userData?.email}</DropdownMenuLabel>
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
      </div>
      {/* //Adding  */}
    </div>
  );
}

export default Appbar;

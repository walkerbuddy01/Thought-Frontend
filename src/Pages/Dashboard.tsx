import Appbar from "@/Components/Appbar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/Components/ui/menubar";
import { IoCreateOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Appbar buttonNeeded={false} />
      <div className="flex justify-center mt-4">
        <div>
          <Menubar>
            <MenubarMenu>
              <Link to={"/createblog"}>
                <MenubarTrigger>
                  <IoCreateOutline size={"1.5em"} />
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to={"/blog"}>
                <MenubarTrigger>
                  <GoHome size={"1.5em"} />
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

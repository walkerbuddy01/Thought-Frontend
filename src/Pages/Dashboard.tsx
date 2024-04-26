import Appbar from "@/Components/Appbar";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/Components/ui/menubar";
import { IoCreateOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import InputBox from "@/Components/InputBox";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineSaveAlt } from "react-icons/md";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../Components/ui/alert-dialog";
import { Button } from "../Components/ui/button";
import axios from "axios";
import { BackendUrl } from "@/config/config";
import { login } from "../../store/AuthSlice";

function Dashboard() {
  const naviagate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth.userData);
  const [userDetail, setUserDetail] = useState({
    username: userData?.username,
    name: userData?.name ? userData?.name : "No Name",
    email: userData?.email,
  });
  const [isEditable, setIsEditable] = useState(false);
  const username = { value: userDetail.username };
  const name = { value: userDetail.name };
  const email = { value: userDetail.email };

  return (
    <div className="w-full">
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
      <div className=" p-2 md:p-5 h-full flex justify-center">
        <div className="bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-400 text-xl p-3 md:p-7  md:w-[50%] rounded-xl ">
          <span className="text-2xl font-semibold">Personal Detail</span>
          <div className="md:p-4 md:px-6 px-5  ">
            <InputBox
              Label="Username"
              LabelClass="text-black "
              type="text"
              placeholder="Enter your Username"
              disabled={true}
              inputClass="py-2"
              {...username}
            />

            <InputBox
              Label="Email"
              LabelClass="text-black "
              type="text"
              placeholder="Enter your Email"
              onChange={(e: any) => {
                setUserDetail({ ...userDetail, email: e.target.value });
              }}
              disabled={!isEditable}
              inputClass={`py-2 ${
                isEditable ? "bg-sky-400 outline outline-sky-600" : ""
              }`}
              {...email}
            />

            <InputBox
              Label="Name"
              LabelClass="text-black "
              type="text"
              placeholder="Enter your Name"
              disabled={!isEditable}
              onChange={(e: any) => {
                setUserDetail({ ...userDetail, name: e.target.value });
              }}
              inputClass={`py-2  ${
                isEditable ? "bg-sky-400 outline outline-sky-600" : ""
              }`}
              {...name}
            />

            <div className="flex gap-6 items-center">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="secondary">Update</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action can update your personal Details 
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => {
                        axios({
                          method: "post",
                          headers: {
                            Authorization: localStorage.getItem("token"),
                          },
                          url: `${BackendUrl}/user/updateUserDetails`,
                          data: { id: userData.id, ...userDetail },
                        }).then((response) => {
                          const userData = response.data;

                          dispatch(login(userData));
                          {isEditable?setIsEditable((prev) => !prev):""}
                          naviagate("/dashboard");
                        });
                      }}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              {isEditable ? (
                <MdOutlineSaveAlt
                  color="green"
                  size={""}
                  onClick={() => {
                    setIsEditable((prev) => !prev);
                  }}
                />
              ) : (
                <FiEdit2
                  color="blue"
                  onClick={() => {
                    setIsEditable((prev) => !prev);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

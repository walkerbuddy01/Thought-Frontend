import Appbar from "@/Components/Appbar";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Components/ui/dialog";
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Separator } from "@/Components/ui/separator";

import axios from "axios";
import { BackendUrl } from "@/config/config";
import { login } from "../../store/AuthSlice";
import { IoSettingsOutline } from "react-icons/io5";
import { Button } from "@/Components/ui/button";
import toast, { Toaster } from "react-hot-toast";
import DockNavigation from "@/Components/DockNavigation";

function Dashboard() {
  const naviagate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.auth.userData);
  const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState({
    username: userData?.username,
    name: userData?.name ? userData?.name : "No Name",
    email: userData?.email,
  });

  async function updateUserData() {
    return new Promise((resolve, reject) => {
      setError("");

      axios({
        method: "post",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        url: `${BackendUrl}/user/updateUserDetails`,
        data: { id: userData.id, ...userDetail },
      })
        .then((response) => {
          resolve("updated successfully");
          const updatedData = response.data;
          dispatch(login(updatedData));
          naviagate("/dashboard");
        })
        .catch((error) => {
          reject();
          setError(error.response.data.message);
        });
    });
  }

  return (
    <div className="w-full">
      <Toaster position="top-center" reverseOrder={false} />
      <Appbar buttonNeeded={false} />

      <DockNavigation />

      <div className=" p-2 md:p-5 h-full w-full flex justify-center">
        <div className=" w-full">
          <div className="flex items-center gap-4 text-xl p-2 font-semibold">
            <IoSettingsOutline size={"1.25em"} /> Profile Settings
          </div>
          <Separator />

          <div
            className="
            flex justify-between
            p-4
          "
          >
            <span className=" text-xl">Thought Username</span>
            {userData.username}
          </div>
          <Separator />
          <div
            className="
            flex justify-between
            p-4
          "
          >
            <span className=" text-xl">Email</span>
            {userData.email}
          </div>
          <Separator />
          <div
            className="
            flex justify-between
            p-4
           
          "
          >
            <span className=" text-xl">Name</span>
            {userData.name}
          </div>
          <div className="flex justify-end p-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit Profile</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're
                    done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      value={`${userDetail.name}`}
                      onChange={(e) => {
                        setUserDetail({ ...userDetail, name: e.target.value });
                      }}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="username"
                      value={`${userDetail.email}`}
                      className="col-span-3"
                      onChange={(e) => {
                        setUserDetail({ ...userDetail, email: e.target.value });
                      }}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    onClick={() => {
                      toast.promise(
                        updateUserData(),
                        {
                          loading: "Updating details",
                          success: (
                            <b className="text-green-600">
                              Updated successfully
                            </b>
                          ),
                          error: (
                            <b className="text-red-500">
                              Error :{error && <>{error}</>}
                            </b>
                          ),
                        },
                        {
                          duration: 2000,
                        }
                      );
                      setError("");
                    }}
                  >
                    Save changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

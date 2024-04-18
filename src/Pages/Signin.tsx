import { useState } from "react";
import CustomButton from "../Components/CustomButton";
import InputBox from "../Components/InputBox";
import Qoute from "../Components/Qoute";
import { signIn } from "@walkerbuddy/basic-auth-validation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../config/config";

function Signin() {
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState<signIn>({
    username: "",
    password: "",
  });

  async function signingIn() {
    try {
      const response = await axios({
        method: "post",
        url: `${BackendUrl}/user/signin`,
        data: userDetail,
      });
      //@ts-ignore
      localStorage.setItem("token", response.data.token);
      navigate("/blog");
    } catch (error: any) {
      alert(error.message);
      // setError(String(error.message));
    }
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="flex justify-center items-center h-screen bg-orange-300">
        <div className="bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100  w-[90%] sm:w-[60%] p-4 sm:p-7  rounded-2xl">
          <h2 className="text-white text-xl text-center font-semibold">
            Sign in
          </h2>
          <p className="text-center text-white">
            Create new Account{" "}
            <Link to={"/signup"} className=" hover:underline text-white/80">
              SignUp
            </Link>
          </p>
          <InputBox
            Label="Username"
            type="text"
            placeholder="Enter your Username"
            onChange={(e: any) => {
              setUserDetail({ ...userDetail, username: e.target.value });
            }}
            inputClass=""
          />
          <InputBox
            Label="Password"
            type="password"
            placeholder="Enter your Password"
            onChange={(e: any) => {
              setUserDetail({ ...userDetail, password: e.target.value });
            }}
          />
          <CustomButton onClick={signingIn} childern="Signin" />
        </div>
      </div>

      <Qoute
        qoute="Embrace technology: it's the canvas upon which dreams are painted."
        author="By Chatgpt"
        QouteClass="sm:flex"
      />
    </div>
  );
}

export default Signin;

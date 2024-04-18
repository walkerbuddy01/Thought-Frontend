import { useState } from "react";
import InputBox from "../Components/InputBox";
import Qoute from "../Components/Qoute";
import CustomButton from "../Components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { BackendUrl } from "../config/config";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    name: "",
    password: "",
  });

  async function signingUp() {
    try {
      const response = await axios({
        method: "post",
        url: `${BackendUrl}/user/signup`,
        data: userDetail,
      });
      localStorage.setItem("token", response.data.token);

      navigate("/blog");
    } catch (error: any) {
      alert(error.message);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 ">
      <div className="flex justify-center items-center bg-orange-300 h-screen">
        <div className="bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-100 w-[90%] sm:w-[60%] p-4 sm:p-7 rounded-2xl">
          <h2 className="text-white text-xl text-center font-semibold">
            Sign Up
          </h2>
          <p className="text-center text-white">
            Already have account?{" "}
            <Link to={"/signin"} className=" hover:underline text-white/80">
              SignIn
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
            Label="Email"
            type="email"
            placeholder="Enter your Email"
            onChange={(e: any) => {
              setUserDetail({ ...userDetail, email: e.target.value });
            }}
          />
          <InputBox
            Label="Name"
            type="text"
            placeholder="Enter your name"
            onChange={(e: any) => {
              setUserDetail({ ...userDetail, name: e.target.value });
            }}
          />
          <InputBox
            Label="Password"
            type="password"
            placeholder="Enter your Password"
            onChange={(e: any) => {
              setUserDetail({ ...userDetail, password: e.target.value });
            }}
          />
          <CustomButton onClick={signingUp} childern="Sign up" />
        </div>
      </div>

      <Qoute
        qoute="Technology is not just a tool. It's a canvas of endless possibilities,
        a gateway to innovation, and a bridge to the future."
        author="By Chatgpt"
      />
    </div>
  );
}

export default Signup;

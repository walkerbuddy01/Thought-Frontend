import { useState } from "react";
import CustomButton from "../Components/CustomButton";
import InputBox from "../Components/InputBox";
import Qoute from "../Components/Qoute";
import { signIn, signinInput } from "@walkerbuddy/basic-auth-validation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BackendUrl } from "../config/config";
import toast, { Toaster } from "react-hot-toast";

function Signin() {
  const navigate = useNavigate();
  // const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState<signIn>({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  async function signingIn() {
    return new Promise((resolve, reject) => {
      setError("");

      const dataformat = signinInput.safeParse(userDetail);
      //@ts-ignore

      if (!dataformat.success) {
        setError(`invalid Format`);
        return reject("Invalid inputs");
      }
      axios({
        method: "post",
        url: `${BackendUrl}/user/signin`,
        data: userDetail,
      })
        .then((Response) => {
          localStorage.setItem("token", Response.data.token);
          resolve("process complete");
          setTimeout(() => {
            navigate("/blog");
            return;
          }, 1000);
        })
        .catch((err) => {
          setError(err.response.data.message);
          reject(err);
        });
    });
    
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="flex justify-center items-center h-screen bg-orange-300">
        <Toaster position="top-center" reverseOrder={false} />
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
          <CustomButton
            onClick={() => {
              //@ts-ignore
              toast.promise(
                signingIn(),
                {
                  loading: "Signing In...",
                  success: <b className="text-green-600">Signed in</b>,
                  error: (
                    <b className="text-red-500">
                      Failed to Sign in {error && <>{error}</>}
                    </b>
                  ),
                },
                {
                  duration: 2000,
                }
              );
              setError("")
            }}
            childern="Signin"
          />
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

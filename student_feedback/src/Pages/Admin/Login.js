import React, { useState, useContext } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import bgimage from "../../assets/02.png";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

function AdminLoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (email === "admin@college.com" && password === "admin123") {
      login({ id: "admin001", name: "Admin User", role: "admin" });
      navigate("/admin/dashboard");
      toast.success("Login Successfull !");
    } else {
      toast.error("Invalid Credentials !");
    }
  };

  const myStyle = { backgroundImage: `url(${bgimage})` };

  return (
    <div className="relative w-full h-screen">
      <div
        style={myStyle}
        className="bg-cover bg-center h-screen blur-sm absolute -z-10 w-full"
      ></div>
      <div className="absolute flex flex-col justify-center items-center w-full h-full px-4">
        <form
          onSubmit={submitHandler}
          className="flex flex-col justify-center items-center w-full max-w-md border border-white rounded-md p-5 shadow-xl shadow-black bg-white bg-opacity-90"
        >
          <h1 className="text-black bg-yellow-400 text-center text-[24px] md:text-[30px] py-2 px-3 rounded-md mb-2 font-semibold">
            Admin Login Page
          </h1>

          <label className="text-[18px] md:text-[20px] w-full mb-4">Admin Email-id :
            <input
              className="w-full border rounded-lg border-yellow-400 text-center mt-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              placeholder="Enter Email-id"
            />
          </label>

          <label className="text-[18px] md:text-[20px] w-full mb-4 relative">Admin Password :
            <input
              className="w-full border rounded-lg border-yellow-400 mt-2 text-center"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
            />
            <span
              className="absolute top-[42px] right-[20px] text-2xl cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
            </span>
          </label>

          <button
            type="submit"
            className="bg-indigo-500 text-white px-6 py-2 rounded-lg mt-3 hover:bg-indigo-600 transition-all w-full"
          >
            Login
          </button>
        </form>

        <p className="text-[18px] md:text-[20px] mt-5 text-white">or</p>

        <button
          onClick={() => navigate("/")}
          className="w-full max-w-md border border-white rounded-md p-4 shadow-xl mt-3 bg-red-500 text-white text-[20px] md:text-[24px]"
        >
          Go to Home Page
        </button>
      </div>
    </div>
  );
}
export default AdminLoginPage;
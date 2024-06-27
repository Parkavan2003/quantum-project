import React from "react";
import sideimg from "./assets/quantum-img.png";
import logo from "./assets/logo.png";

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full lg:w-1/2 h-full flex flex-col">
        <img src={logo} alt="logo-img" className="w-32 mx-auto mt-4 lg:w-52" />

        <div className="w-full flex flex-col px-6 sm:px-12 lg:px-36 mt-8 lg:mt-0">
          <label htmlFor="Username" className="font-bold mb-1 text-sm sm:text-base">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="w-full text-black px-2 py-2 sm:py-3 rounded-md border-gray-400 border-2 outline-none mb-4"
          />

          <label htmlFor="email" className="font-bold mb-1 text-sm sm:text-base">
            Email
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full text-black px-2 py-2 sm:py-3 rounded-md border-gray-400 border-2 outline-none mb-4"
          />

          <label htmlFor="password" className="font-bold mb-1 text-sm sm:text-base">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="w-full text-black px-2 py-2 sm:py-3 border-2 rounded-md border-gray-400 outline-none mb-4"
          />

          <label htmlFor="con-password" className="font-bold mb-1 text-sm sm:text-base">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full text-black px-2 py-2 sm:py-3 border-2 rounded-md border-gray-400 outline-none mb-4"
          />

          <div className="mt-4">
            <button className="bg-blue-950 w-full p-2 sm:p-3 uppercase font-semibold text-white rounded-md">
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 h-full flex-col mt-8 lg:mt-0 hidden lg:flex">
        <div className="absolute top-[9%] left-[8%] flex flex-col">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-3">Welcome</p>
          <p className="text-white text-lg sm:text-2xl">
            Quantum Sharq Innovative Solutions!
          </p>
        </div>
        <img src={sideimg} alt="side-img" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Register;

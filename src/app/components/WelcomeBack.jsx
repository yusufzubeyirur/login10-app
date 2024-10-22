import React from "react";

const WelcomeBack = () => {
  return (
    <div className="bg-[#DC5B12] flex justify-center items-center h-screen w-10/12 text-white">
      <div className="flex flex-col gap-16 w-3/5 text-center">
        <h1 className="font-bold text-7xl text-white">Welcome Back</h1>

        <p className="text-[20px] text-[#FFFFFFB2] font-bold">
          Sign in with your credentionals <br />
          to enjoy our uninterupted services
        </p>

        <p className="text-[20px] text-[#00000066] font-semibold">
          <a href="">Dont have an account yet ?</a>
        </p>

        <div className="mx-auto">
          <img src="/image 4.png" alt="alışveriş sepeti" />
        </div>

        <button className="uppercase border-2 bg-transparent py-3 px-4 font-bold text-xl rounded-[50px] w-3/4 mx-auto border-[#ECECEC00] hover:bg-white hover:text-[#DC5B12] duration-300">
          click here to sign up
        </button>
      </div>
    </div>
  );
};
export default WelcomeBack;

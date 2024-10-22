import React from "react";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center p-20 items-center bg-white z-50 min-w-[350px]">
      <div className="flex flex-col gap-4 w-3/4">
        <h1 className="uppercase text-[#000000CC] font-bold text-7xl text-center mb-2">
          sign in to shey
        </h1>

        {/*png ler */}
        <div className="flex justify-around w-1/2 mx-auto my-4">
          <a href="#">
            <img src="/image 1.png" alt="google" />
          </a>
          <a href="">
            <img src="/image 2.png" alt="linkedin" />
          </a>
          <a href="">
            <img src="/image 3.png" alt="github" />
          </a>
        </div>

        {/* or çizgisi */}
        <div className="flex items-center">
          <hr className="flex-grow border-[1px] border-black/50" />
          <span className="uppercase px-2 font-semibold text-2xl">or</span>
          <hr className="flex-grow border-[1px] border-black/50" />
        </div>

        <p className="text-[#00000066] text-[25px]font-semibold mb-5 text-center ">
          use email and password
        </p>

        <div className="flex flex-col gap-12">
          <input
            type="text"
            placeholder="Username"
            className="py-4 px-8 rounded-[50px] text-xl placeholder-[#00000036] text-black bg-[#ECECECC2]"
          />
          <input
            type="password"
            placeholder="Password"
            className="py-4 px-8 rounded-[50px] text-xl placeholder-[#00000036] text-black bg-[#ECECECC2]"
          />
          <button className="uppercase bg-[#DC5B12] text-white rounded-[50px] py-3 px-4 font-bold text-3xl border-2 border-[#DC5B12] hover:bg-white hover:text-[#DC5B12] hover:border-1 hover:border-[#DC5B12]">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;

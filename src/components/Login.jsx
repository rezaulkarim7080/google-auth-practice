import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[700px] max-auto mx-auto my-16 p-4 bg-gray-200">
      <div>
        <h1 className="text-3xl font-bold py-2">Sign to your account</h1>
      </div>
      <form action="">
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Email Address</label>
          <input type="email" className="py-2 rounded font-medium" />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium"> Password</label>
          <input type="password" className="py-2 rounded font-medium " />
        </div>
        <div className=" py-2">
          <button className="py-2 font-medium bg-orange-600 w-full text-white">
            Sign in
          </button>
        </div>
      </form>{" "}
      <p>
        Don't have an account yet?{" "}
        <Link className="underline" to="/signup">
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;

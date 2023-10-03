import React from "react";

const Account = () => {
  return (
    <div className="max-w-[700px] max-auto  my-16 p-4 bg-gray-100">
      <div>
        <h1 className="text-xl font-bold py-2">Account</h1>
        <p>User Email :</p>

        <div className=" py-4">
          <button className="py-2 px-3 font-mediuml bg-white">
            sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;

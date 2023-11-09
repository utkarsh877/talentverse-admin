"use client";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleUser = () => {
    router.push("/uDetails");
  }

  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
        User Engagement
      </h1>

      <div className="px-28">
        <div className="p-8 border-blue border-2 rounded-lg bg-white">
          <table className="w-full ">
            <thead>
              <tr className="bg-slate-100 ">
                <th className="py-1 text-black text-sm font-normal">Profile ID</th>
                <th className="py-1 text-black text-sm font-normal">Name</th>
                <th className="py-1 text-black text-sm font-normal">Email</th>
                <th className="py-1 text-black text-sm font-normal">D O J</th>
                <th className="py-1 text-black text-sm font-normal">Followers</th>
                <th className="py-1 text-black text-sm font-normal">Following</th>
                <th className="py-1 text-black text-sm font-normal">Status</th>
                <th className="py-1 text-black text-sm font-normal"> </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="py-1 text-black text-center">27927933843</td>
                <td className="py-1 text-black text-center">David Marner</td>
                <td className="py-1 text-black text-center">david_123@talentverse.in</td>
                <td className="py-1 text-black text-center"> 21 NOV 23</td>
                <td className="py-1 text-black text-center"> 2167484</td>
                <td className="py-1 text-black text-center"> 210484</td>
                <td className="py-1 text-black text-center"> <h1
                  className="rounded-2xl text-green-600 bg-green-50"
                > Active
                  </h1>
                </td>
                <td className=" text-black text-center"> <button onClick={handleUser}>Details</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;

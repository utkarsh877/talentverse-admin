import React from "react";
import {
  MdDataSaverOn,
  MdOutlinePhotoSizeSelectActual,
  MdOutlineScreenShare,
  MdOutlineSmartDisplay,
  MdPeople,
} from "react-icons/md";

const page = () => {
  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
        User Details
      </h1>
      <div className="px-20">
        <h2 className="text-black text-2xl font-medium">Sai Tile</h2>
        <h2 className="text-gray-800 text-lg font-normal">sai_tile</h2>

        <div className="flex flex-row mt-5 px-16">
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl">
            <MdOutlinePhotoSizeSelectActual className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Posts</h2>
            <h3 className="text-black text-sm font-light"> 200 photos</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdOutlineSmartDisplay className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Orbits</h2>
            <h3 className="text-black text-sm font-light"> 200 videos</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdPeople className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Followers</h2>
            <h3 className="text-black text-sm font-light text-center"> 200</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdOutlineScreenShare className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Share</h2>
            <h3 className="text-black text-sm font-light"> 200 shares</h3>
          </div>
          <div className="flex flex-col bg-white border-2 px-12 py-5 rounded-xl ml-10">
            <MdDataSaverOn className="text-blue-800 text-4xl" />
            <h2 className="text-black text-lg font-normal">Saved</h2>
            <h3 className="text-black text-sm font-light"> 200 posts</h3>
          </div>
        </div>
      </div>

      <div className="px-52 mt-4">
        <div className="p-8 border-blue border-2 rounded-lg bg-white">
          <table className="w-full ">
            <thead>
              <tr className="bg-slate-100 ">
                <th className="py-1 text-black text-sm font-normal">File Name</th>
                <th className="py-1 text-black text-sm font-normal">Type</th>
                <th className="py-1 text-black text-sm font-normal">Created At</th>
                <th className="py-1 text-black text-sm font-normal">Size</th>
                <th className="py-1 text-black text-sm font-normal">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="py-1 text-black text-center">postImage_2023-09-15_01_03</td>
                <td className="py-1 text-black text-center">JPG</td>
                <td className="py-1 text-black text-center">1 Feb, 2020 at 5:30 PM</td>
                <td className="py-1 text-black text-center"> 4.3 MB</td>
                <td className="py-1 text-black text-center"> 2167484</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default page;

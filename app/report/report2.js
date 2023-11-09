"use client";
import React, { useState } from "react";
import { RiCloseCircleFill, RiReplyFill } from "react-icons/ri";

const Report2 = () => {
  const [status, setStatus] = useState("Open");
  const [showModal, setShowModal] = useState(false);

  const handleReply = () => {
    //
  };

  const handleClose = (subject, message) => {
    setStatus("Close");
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
        Customer Support
      </h1>

      <div className="mt-2 px-32">
        <table className="w-full ">
          <thead>
            <tr className="bg-blue-200 text-black">
              <th className="py-2 px-1 border-r-2 text-xs">Report2</th>
              <th className="py-2 px-1 border-r-2 text-xs">Report2 DATE</th>
              <th className="py-2 px-1 border-r-2 text-xs">Report2</th>
              <th className="py-2 px-1 border-r-2 text-xs">MESSAGE</th>
              <th className="py-2 px-1 border-r-2 text-xs">STATUS</th>
              <th className="py-2 px-1 border-r-2 text-xs">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white text-black border-b-2">
              <td className="py-2 text-center">234348943894</td>
              <td className="py-2 text-center">12 JUL 98</td>
              <td className="py-2 text-center">ALERT</td>
              <td className="py-2 text-center">Hi App not working</td>
              <td className="text-center">
                {" "}
                <h1
                  className={`rounded-3xl py-1 ${
                    status === "Open"
                      ? "text-red-800 bg-red-50"
                      : "text-green-600 bg-green-50"
                  }`}
                >
                  {status}
                </h1>
              </td>
              <td className="flex flex-col">
                <button
                  className="flex flex-row text-black mt-2"
                  onClick={() => setShowModal(true)}
                >
                  <RiReplyFill className="text-indigo-950 text-2xl ml-10 mr-5" />{" "}
                  Reply
                </button>
                {/* Modal */}
                {showModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                      <Reply
                        ticketId="234348943894"
                        onSubmit={handleReply}
                        onCancel={closeModal}
                      />
                    </div>
                  </div>
                )}
                <button
                  className="flex flex-row text-black mt-2"
                  onClick={handleClose}
                >
                  <RiCloseCircleFill className="text-red-500 text-2xl ml-10 mr-5" />{" "}
                  Close
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report2;

"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiCloseCircleFill, RiReplyFill } from "react-icons/ri";
import Reply from "./reply";

const page = () => {
  const [showModal, setShowModal] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    axios
      .get("http://43.204.30.49:4000/api/support/getTickets", {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGI4YjExYzc2ZjRhZDI1NjdlZDQwZSIsImlhdCI6MTY5OTQ0OTYyMSwiZXhwIjoxNzAyMDQxNjIxfQ.im4Z2jnnGcAJd94VssHNOMZJjaGE16vIXQzxTSttzG4",
        },
      })
      .then((response) => {
        setTickets(response.data.tickets);
      })
      .catch((error) => {
        console.error("Error fetching tickets", error);
      });
  }, []);

  const handleReply = async (id, subject, message) => {
    try {
      await axios.post(
        "http://43.204.30.49:4000/api/support/sendReply",
        {
          subject: subject,
          message: message,
          ticketId: id,
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGI4YjExYzc2ZjRhZDI1NjdlZDQwZSIsImlhdCI6MTY5OTQ0OTYyMSwiZXhwIjoxNzAyMDQxNjIxfQ.im4Z2jnnGcAJd94VssHNOMZJjaGE16vIXQzxTSttzG4",
          },
        }
      );
      console.log(subject, message);
    } catch (error) {
      console.error("Error sending reply", error.message);
    }
  };

  const handleClose = async (id) => {
    try {
      await axios.put(
        "http://43.204.30.49:4000/api/support/updateStatus",
        {
          ticketId: id,
          status: "CLOSED",
        },
        {
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NGI4YjExYzc2ZjRhZDI1NjdlZDQwZSIsImlhdCI6MTY5OTQ0OTYyMSwiZXhwIjoxNzAyMDQxNjIxfQ.im4Z2jnnGcAJd94VssHNOMZJjaGE16vIXQzxTSttzG4",
          },
        }
      );
      setTickets(
        tickets.map((ticket) => {
          if (ticket._id === id) {
            return { ...ticket, status: "CLOSED" };
          }
          return ticket;
        })
      );
    } catch (error) {
      console.error("Error closing ticket", error.message);
    }
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
              <th className="py-2 px-1 border-r-2 text-xs">TICKET ID</th>
              <th className="py-2 px-1 border-r-2 text-xs">INQUIRY DATE</th>
              <th className="py-2 px-1 border-r-2 text-xs">SUBJECT</th>
              <th className="py-2 px-1 border-r-2 text-xs">MESSAGE</th>
              <th className="py-2 px-1 border-r-2 text-xs">STATUS</th>
              <th className="py-2 px-1 border-r-2 text-xs">ACTION</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr className="bg-white text-black border-b-2" key={ticket._id}>
                <td className="py-2 text-center">{ticket._id}</td>
                <td className="py-2 text-center">
                  {ticket.createdAt.substring(0, 10)}
                </td>
                <td className="py-2 text-center">{ticket.subject}</td>
                <td className="py-2 text-center">{ticket.message}</td>
                <td className="text-center">
                  {" "}
                  <h1
                    className={`rounded-3xl py-1 ${
                      ticket.status === "OPEN"
                        ? "text-red-800 bg-red-50"
                        : "text-green-600 bg-green-50"
                    }`}
                  >
                    {ticket.status}
                  </h1>
                </td>
                <td className="flex flex-col">
                  <button
                    className="flex flex-row text-black mt-2"
                    onClick={() => setShowModal(ticket._id)}
                  >
                    <RiReplyFill className="text-indigo-950 text-2xl ml-10 mr-5" />{" "}
                    Reply
                  </button>
                  {/* Modal */}
                  {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white p-4 rounded shadow-lg">
                        <Reply
                          ticketId={showModal}
                          onSubmit={(subject, message) => {
                            handleReply(showModal, subject, message);
                          }}
                          onCancel={closeModal}
                        />
                      </div>
                    </div>
                  )}
                  {ticket.status === "OPEN" && (
                    <button
                      className="flex flex-row text-black mt-2"
                      onClick={(_) => handleClose(ticket._id)}
                    >
                      <RiCloseCircleFill className="text-red-500 text-2xl ml-10 mr-5" />{" "}
                      Close
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

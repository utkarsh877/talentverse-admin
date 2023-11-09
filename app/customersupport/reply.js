import React, { useState } from "react";

const Reply = ({ ticketId, onSubmit, onCancel }) => {
  const [subject, setSubject] = useState(`TICKETID ${ticketId} STATUS`);
  const [message, setMessage] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(subject, message);
    setSubject(""); // Resetting the subject after submission
    setMessage("");
  };

  return (
    <div className="flex flex-row px-5 py-5 rounded w-72">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black text-xl font-semibold">Status Reply</h1>
        <div className="flex flex-col mt-5 px-10">
          <div>
            <h2 className="text-black">Subject</h2>
            <input
              type="text"
              className="text-base font-normal border-black border-2 mb-3 pl-2 rounded text-black"
              placeholder="subject"
              value={subject}
              readOnly // Making the input read-only
            />
          </div>
          <div>
            <h2 className="text-black">Message</h2>
            <input
              type="text"
              className="text-base font-normal border-black border-2 mb-3 pl-2 rounded text-black h-36 align-text-top"
              placeholder="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-row px-10">
          <button
            type="button"
            className="bg-black text-left text-white text-sm font-normal px-2 py-3 ml-6 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-black text-left text-white text-sm font-normal px-2 py-3 ml-3 rounded-md"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reply;

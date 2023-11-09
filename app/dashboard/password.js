import React, { useState } from "react";

const password = ({ onSubmit, onCancel }) => {
  const [existingPassword, setExistingPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleCancel = (e) => {
    e.preventDefault();
    onCancel();
  };

  const handleSubmit = () => {
    e.preventDefault();
    onSubmit(existingPassword, newPassword, confirmPassword);
    setExistingPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex flex-row px-5 py-5 rounded w-72">
      <form onSubmit={handleSubmit}>
        <h1 className="text-black text-xl font-semibold">Change Pasword</h1>
        <div className="flex flex-col mt-5 px-10">
          <div>
            <h2 className="text-black">Existing Password</h2>
            <input
              type="password"
              className="text-base font-normal border-black border-2 mb-3 pl-2 rounded text-black"
              placeholder="existing password"
              value={existingPassword}
              onChange={(e) => setExistingPassword(e.target.value)}
            />
          </div>
          <div>
          <h2 className="text-black">New Password</h2>
          <input
            type="password"
            className="text-base font-normal border-black border-2 mb-3 pl-2 rounded text-black"
            placeholder="new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          </div>
          <div>
          <h2 className="text-black">Confirm New Password</h2>
          <input
            type="password"
            className="text-base font-normal border-black border-2 mb-3 pl-2 rounded text-black"
            placeholder="confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          </div>
        </div>
        <div className="flex flex-row px-10">
          <button
            type="button"
            className=" bg-black text-left text-white text-sm font-normal  px-2 py-3 ml-6 rounded-md"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            type="submit"
            className=" bg-black text-left text-white text-sm font-normal px-2 py-3 ml-3 rounded-md"
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default password;

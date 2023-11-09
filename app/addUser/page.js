"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const roleOptions = ["Admin", "SubAdmin", "Analyst"];
  const [user, setUser] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // Assuming you have this state for editing

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      // Editing an existing user
      const updatedUser = [...user];
      updatedUser[editIndex] = { username, password, role };
      setUser(updatedUser);
      setEditIndex(null);
    } else {
      // Adding a new user
      setUser([...user, { username, password, role }]);
    }
    // Reset input fields
    setUserName("");
    setPassword("");
    setRole("");
  };

  const handleEdit = (i) => {
    const selectedUser = user[i];
    setUserName(selectedUser.username);
    setPassword(selectedUser.password);
    setRole(selectedUser.role);
    setEditIndex(i);
  };

  const handleDelete = (i) => {
    let copyUsers = [...user];
    copyUsers.splice(i, 1);
    setUser(copyUsers);
  };

  let renderTask = <h2>No Users Available</h2>

  if (user.length > 0) {
    renderTask = user.map((u, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex justify-between w-1/4">
            <div className="text-left ml-40">
              <p className="text-black font-semibold">Username</p>
              <h5 className="text-2xl font-medium">{u.username}</h5>
            </div>
            <div className="text-left ml-4">
              <p className="text-black font-semibold">Password</p>
              <h6 className="text-2xl font-medium">{u.password}</h6>
            </div>
            <div className="text-left ml-4">
              <p className="text-black font-semibold">Role</p>
              <h6 className="text-2xl font-medium">{u.role}</h6>
            </div>
          </div>
          <div className=" justify-end">
            <button
              onClick={() => handleEdit(i)}
              className="bg-yellow-500 text-white px-4 py-3 text-xl font-normal rounded-xl m-4"
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(i);
              }}
              className="bg-red-600 text-red px-4 py-3 text-xl font-normal rounded-xl m-4"
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <div className=" bg-slate-50 h-screen">
      <h1 className="px-8 py-8 text-black text-2xl font-semibold">
        Add Authorized User Admins
      </h1>
      <form onSubmit={handleSubmit} className="justify-center flex flex-row">
        <input
          type="text"
          className="text-xl font-normal text-black border-black border-2 m-5 pl-2 rounded"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />

        <input
          type="text"
          className="text-xl font-normal text-black border-zinc-500 border-2 m-5 pl-2 rounded"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex flex-col items-start">
          {/* <label className="text-lg font-semibold mb-2">Role:</label> */}
          <select
            className="text-xl font-normal text-black border-zinc-500 border-2 pl-2 rounded mt-6"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Assign a role</option>
            {roleOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button className="bg-black  text-white px-4 py-3 text-xl font-bold rounded-xl m-4">
          {editIndex !== null ? "Update User" : "Add User"}
        </button>
      </form>
      <hr />
      <div className="p-8  text-black">
        <ul className="text-center">{renderTask}</ul>
      </div>
    </div>
  );
};

export default page;

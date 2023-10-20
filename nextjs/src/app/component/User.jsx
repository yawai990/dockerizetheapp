"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import FormCom from "./Form";

const User = () => {
  const [userLists, setUserList] = useState(null);
  const [updateUser, setUpdateUser] = useState(null);

  async function getUser() {
    const resp = await fetch("http://localhost:3000/api/todos");
    const data = await resp.json();
    setUserList(data.result);
  }

  async function deleteUser(id) {
    const resp = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "DELETE",
    });

    if (resp.status === 202) {
      getUser();
      toast.success("user deleted successfully");
    } else toast.error("user deletion failed");
  }

  async function getSingleUser(id) {
    const resp = await fetch(`http://localhost:3000/api/todos/${id}`);
    const data = await resp.json();
    const notUpdateUser = userLists.filter((u) => u.id !== id);
    setUpdateUser(data[0]);
    setUserList(notUpdateUser);
    getUser();
  }

  useEffect(() => {
    getUser();
  }, []);

  if (userLists === null) {
    return (
      <div>
        <p className="text-lg text-red-500">UserList did not existt</p>
      </div>
    );
  }
  return (
    <section className="px-3 py-2">
      <h1>User Lists</h1>
      <div className="flex px-4">
        <main className="w-[70%] flex flex-wrap gap-3 p-3">
          {userLists.map((u) => {
            return (
              <div
                key={u.id}
                className="w-full md:w-auto py-2 px-4 bg-white rounded drop-shadow"
              >
                <p className="capitalize mb-1">
                  <span className="min-w-[80px] inline-block">Name </span>{" "}
                  <span>: {u.name}</span>
                </p>
                <p className="capitalize">
                  <span className="min-w-[80px] inline-block">Address </span>{" "}
                  <span>: {u.address}</span>
                </p>

                <div className="gap-2 mt-2">
                  <button
                    onClick={() => deleteUser(u.id)}
                    className="w-full my-2 block bg-red-500 rounded py-1 px-3"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => getSingleUser(u.id)}
                    className="w-full block bg-green-500 rounded py-1 px-3"
                  >
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
        </main>

        <main className="flex-1">
          <FormCom
            getUser={getUser}
            updateUser={updateUser}
            setUpdateUser={setUpdateUser}
          />
        </main>
      </div>
    </section>
  );
};

export default User;

import React from "react";
import { body } from "../../fonts/font";
import { toast } from "react-toastify";

const FormCom = ({ getUser, updateUser, setUpdateUser }) => {
  async function addUser(newUser) {
    const resp = await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    const data = await resp.json();

    if (data.affectedRows) {
      toast.success("new user added");
      getUser();
    } else return;
  }

  async function updatedUser(id, user) {
    const resp = await fetch(`http://localhost:3000/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...user }),
    });
    const data = await resp.json();

    if (data.affectedRows) {
      toast.success("user updated");

      // clear the updated data in the state
      setUpdateUser(null);
      getUser();
    } else return;
  }

  const hanldeForm = (e) => {
    e.preventDefault();
    const elements = e.currentTarget.elements;
    const name = elements.name.value;
    const address = elements.address.value;

    if (!name || !address) {
      return;
    } else {
      if (updateUser) {
        updatedUser(updateUser.id, { name, address });
      } else addUser({ name, address });
    }
    elements.name.value = "";
    elements.address.value = "";
  };

  return (
    <form onSubmit={hanldeForm} className={body.className}>
      <div className="mb-3">
        <label htmlFor="name" className="block">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={updateUser ? updateUser.name : ""}
          className="border-gray-300 p-2 rounded border w-full outline-none"
        />
      </div>
      <div>
        <label htmlFor="address" className="block">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          defaultValue={updateUser ? updateUser.address : ""}
          className="border-gray-300 p-2 rounded border w-full outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-3 rounded w-full bg-blue-400 text-white px-4 py-1"
      >
        Register
      </button>
    </form>
  );
};

export default FormCom;

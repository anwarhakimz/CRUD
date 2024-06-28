import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Url } from "../constant/constant";

const AddUserPage = () => {
  const [user, setUser] = useState({ name: "", email: "", gender: "" });
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUser((prevstate) => ({ ...prevstate, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
    navigate("/");
  };

  const addUser = async () => {
    try {
      await axios.post(Url + "users", {
        name: user.name,
        email: user.email,
        gender: user.gender,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 :text-white"
          >
            Your name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleOnChange}
            name="name"
            value={user.name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500 :shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 :text-white"
          >
            Your email
          </label>
          <input
            type="text"
            value={user.email}
            id="email"
            onChange={handleOnChange}
            name="email"
            placeholder="name@flowbite.com"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600 :placeholder-gray-400 :text-white :focus:ring-blue-500 :focus:border-blue-500 :shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="gender"
            className="block mb-2 text-sm font-medium text-gray-900 :text-white"
          >
            Gender
          </label>

          <div className="flex items-center mb-4">
            <input
              checked={user.gender === "male"}
              id="default-radio-1"
              type="radio"
              onChange={handleOnChange}
              value="male"
              name="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 :focus:ring-blue-600 :ring-offset-gray-800 focus:ring-2 :bg-gray-700 :border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 :text-gray-300"
            >
              Male
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={user.gender === "female"}
              id="default-radio-2"
              type="radio"
              value="female"
              onChange={handleOnChange}
              name="gender"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 :focus:ring-blue-600 :ring-offset-gray-800 focus:ring-2 :bg-gray-700 :border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 :text-gray-300"
            >
              Female
            </label>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
          >
            Add User
          </button>
          <Link
            to={"/"}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUserPage;

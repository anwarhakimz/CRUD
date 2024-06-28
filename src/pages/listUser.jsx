import React, { useEffect, useState } from "react";
import axios from "axios";
import { Url } from "../constant/constant";
import { Link, useNavigate } from "react-router-dom";

const ListUserPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const handleDeleteUser = async (id) => {
    try {
      console.log(id);
      await axios.delete(Url + "users/" + id);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdituser = async (id) => {
    navigate("/edit/" + id);
  };

  const getUser = async () => {
    try {
      const res = await axios.get(`${Url}users`);
      setData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="">
      <div className="w-full flex justify-center items-start h-[calc(100vh-500px)] overflow-y-auto">
        <div className="relative  ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 :text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 :bg-gray-700 :text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, i) => (
                <tr
                  key={user._id}
                  className="bg-white border-b :bg-gray-800 :border-gray-700"
                >
                  <td className="px-6 py-4">{i + 1}</td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap :text-white"
                  >
                    {user.name}
                  </th>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4">{user.gender}</td>
                  <td className="px-6 py-4">
                    {/* Letakkan aksi yang sesuai di sini */}
                    <button
                      className="text-blue-500 hover:underline"
                      onClick={() => handleEdituser(user._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 hover:underline ml-2"
                      onClick={() => handleDeleteUser(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to={"/add"}
          className="bg-blue-600 text-white py-1.5 px-4 rounded-lg"
        >
          add
        </Link>
      </div>
    </div>
  );
};

export default ListUserPage;

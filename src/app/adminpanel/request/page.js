import React from "react";

const UserListPage = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Initial Request</h2>
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Tenant Id (or) Email"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
          SEARCH
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-left">S.No</th>
              <th className="p-3 text-left">User Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Tenant Id</th>
              <th className="p-3 text-left">Wallet Address</th>
              <th className="p-3 text-left">Form Level Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">1</td>
              <td className="p-3">Benjamin Tomczak</td>
              <td className="p-3">benjamin.tomczak@gmail.com</td>
              <td className="p-3">TENANT4012</td>
              <td className="p-3 overflow-hidden text-ellipsis whitespace-nowrap">
                0x392abd52c287c6a571b06291bc54414b18a8ce4
              </td>
              <td className="p-3">Inprogress</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserListPage;

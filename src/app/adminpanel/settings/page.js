"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function SettingsPage() {
  const [claimEnabled, setClaimEnabled] = useState(false);
  const [discountEnabled, setDiscountEnabled] = useState(false);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>

      {/* Token Settings */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Token Settings</h3>
        <label className="block mb-2">Current Token Price</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          value="0.1"
          readOnly
        />

        <label className="block mb-2">New Token Price</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter new price"
        />

        <div className="flex items-center justify-between mt-2">
          <span>Claim Enable</span>
          <Switch
            checked={claimEnabled}
            onChange={setClaimEnabled}
            className={`${
              claimEnabled ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
          >
            <span
              className={`${
                claimEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
        </div>
        <button className="mt-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>

      {/* Sales Settings */}
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-semibold mb-2">Sales Settings</h3>
        <div className="flex items-center justify-between mt-2">
          <span>Discount</span>
          <Switch
            checked={discountEnabled}
            onChange={setDiscountEnabled}
            className={`${
              discountEnabled ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
          >
            <span
              className={`${
                discountEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
            />
          </Switch>
        </div>
        <label className="block mb-2 mt-2">Discount Percentage</label>
        <input
          type="text"
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter discount %"
        />
        <button className="mt-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>

      {/* Password Settings */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Password Settings</h3>
        <label className="block mb-2">New Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter new password"
        />

        <label className="block mb-2">Confirm Password</label>
        <input
          type="password"
          className="w-full p-2 border rounded mb-2"
          placeholder="Confirm password"
        />

        <button className="mt-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}

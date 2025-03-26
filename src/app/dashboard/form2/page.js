"use client";
import React from "react";

const RentalForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Rental Form</h2>
      <form className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Apartment or House</label>
          <select className="w-full border p-2 rounded">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Complete address</label>
          <textarea className="w-full border p-2 rounded" rows="2"></textarea>
        </div>
        <div>
          <label className="block font-medium">If Apartment: Level</label>
          <select className="w-full border p-2 rounded">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Number of rooms</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">Rooms over 40m2</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">Year of construction</label>
          <input type="number" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">Furnished unit</label>
          <select className="w-full border p-2 rounded">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Do you work from home?</label>
          <select className="w-full border p-2 rounded">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">
            Use unit for work purposes?
          </label>
          <select className="w-full border p-2 rounded">
            <option>Select</option>
          </select>
        </div>
        <div>
          <label className="block font-medium">Rental Contract (PDF)</label>
          <input type="file" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">
            ID Verification (pdf, jpeg, png)
          </label>
          <input type="file" className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block font-medium">Tenant's Metamask Wallet</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value="0x392abd52cf287c6a571b06291bc54414b18a8ce4"
            readOnly
          />
        </div>
        <div className="col-span-2">
          <label className="block font-medium mb-2">Equipment to mention</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              "Fire alarm",
              "Anti-robbery system",
              "Fireplace",
              "Veranda",
              "Outbuilding unit",
              "Garage",
            ].map((item, index) => (
              <label key={index} className="flex items-center">
                <input type="checkbox" className="mr-2" /> {item}
              </label>
            ))}
          </div>
        </div>
        <div className="col-span-2 flex justify-center mt-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentalForm;

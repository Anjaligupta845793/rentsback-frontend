"use client";

import React from "react";
import {
  Users,
  UserPlus,
  RefreshCcw,
  ShoppingCart,
  Bookmark,
  Bell,
} from "lucide-react";

const stats = [
  {
    title: "No. of Users",
    value: 14,
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "No. of Initial requests",
    value: 1,
    icon: <UserPlus className="w-6 h-6 text-white" />,
  },
  {
    title: "No. of renewals",
    value: 0,
    icon: <RefreshCcw className="w-6 h-6 text-white" />,
  },
  {
    title: "No. of terminations",
    value: 4,
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
  },
  {
    title: "No. of NFT minted",
    value: 3,
    icon: <Bookmark className="w-6 h-6 text-white" />,
  },
  {
    title: "Current Token Price",
    value: 0.1,
    icon: <Bell className="w-6 h-6 text-white" />,
  },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6">ADMIN DASHBOARD</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
          >
            <div>
              <h3 className="text-gray-600 text-sm font-semibold">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold mt-1">{stat.value}</p>
            </div>
            <div className="bg-[#130fa3] p-3 rounded-full">{stat.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;

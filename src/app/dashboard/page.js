"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { User, ShieldCheck, Edit } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import RewardCalculator from "@/components/RewardCalculator";
import Link from "next/link";
import Cookies from "js-cookie";
import Image from "next/image";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white rounded-lg shadow-lg p-6 animate-pulse" />
    ),
  }
);

const ProfileSection = () => {
  const { user, fetchUserData } = useAuth();
  const [storedUser, setStoredUser] = useState(null);
  const [rcoinBalance, setRcoinBalance] = useState(0);

  useEffect(() => {
    const cookieUser = Cookies.get("user");
    fetchUserData();
    if (cookieUser) {
      setStoredUser(JSON.parse(cookieUser));
    }
  }, []);

  const displayUser = user || storedUser;

  if (!displayUser) return <p>Loading user...</p>;

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg text-black shadow-lg p-6"
    >
      <div className="flex items-center gap-4 mb-4">
        {/* Conditionally show profile image or user icon */}
        <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-[#130fa3]">
          {displayUser?.profileImage?.url ? (
            <Image
              src={displayUser.profileImage.url}
              alt="User Profile"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-10 h-10 text-white" />
          )}
        </div>

        <div>
          <h2 className="text-xl font-semibold">
            {displayUser?.name || "User"}
          </h2>
          <p className="text-gray-600 text-sm">{displayUser?.email}</p>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Rcoin Balance</h3>
        <p className="text-gray-700">Your balance: {rcoinBalance} Rcoin</p>
      </div>

      <div className="flex flex-col gap-3">
        <Link href="/dashboard/editprofile" className="w-full">
          <Button variant="outline" className="flex items-center gap-2 w-full">
            <Edit className="w-5 h-5" /> Edit Profile
          </Button>
        </Link>
      </div>
    </MotionDiv>
  );
};

export default ProfileSection;

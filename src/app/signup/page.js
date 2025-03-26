"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const Signup = () => {
  const { signup } = useAuth(); // Get signup function from context
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    await signup(username, email, password);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-black via-[#130fa3] to-black">
      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-black/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label className="block text-white/80 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-black/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-white/80 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-black/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-white/80">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-400 hover:text-blue-300">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

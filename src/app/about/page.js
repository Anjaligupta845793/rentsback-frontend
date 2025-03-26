"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const MotionDiv = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.div),
  { ssr: false }
);

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    bio: "15+ years experience in PropTech and blockchain technology.",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    bio: "Blockchain architect with extensive experience in smart contracts.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Operations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    bio: "Real estate operations expert with 10+ years industry experience.",
  },
  {
    name: "David Kim",
    role: "Lead Developer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    bio: "Full-stack developer specializing in Web3 technologies.",
  },
];

const About = () => {
  return (
    <div className="bg-gradient-to-bl from-black via-[#130fa3] to-black py-28">
      <div className="max-w-7xl mx-auto px-4 ">
        {/* Mission Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6 text-white">Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto text-white font-thin">
            At Rentsback, we&rsquo;re revolutionizing the rental market by
            combining traditional real estate with blockchain technology. Our
            mission is to create a more efficient, transparent, and rewarding
            rental experience for both tenants and property owners.
          </p>
        </MotionDiv>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl p-6 w-full md:w-[1260px]">
          <h2 className="text-3xl font-semibold text-white text-center mb-6">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-400 mr-3" />
                <span>contact@rentsback.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-400 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-400 mr-3" />
                <span>123 Blockchain Street, Tech City, TC 12345</span>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full py-2 px-1 rounded-md bg-white/10 border border-white/20 shadow-sm text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md py-2 px-1 bg-white/10 border border-white/20 shadow-sm text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 block w-full rounded-md px-1 bg-white/10 border border-white/20 shadow-sm text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500/80 text-white py-2 px-4 rounded-md hover:bg-blue-600/90 transition flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

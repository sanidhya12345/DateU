/** @format */

import React from "react";
import toast from "react-hot-toast";
import { Heart, X } from "lucide-react";
export default function Home() {
  const currentProfile = {
    name: "Sanidhya Varshney",
    age: 22,
    bio: "A passionate Software Developer",
    photos: [
      "https://avatars.githubusercontent.com/u/60321589?s=400&u=59ef33b19798beaa23010824e848572c2f16d4ed&v=4",
    ],
  };
  return (
    <div className="max-w-md mx-auto">
      {/* Profile Card */}
      <div className="relative rounded-lg overflow-hidden shadow-lg aspect-[3/4]">
        <img
          src={currentProfile.photos[0]}
          alt={currentProfile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <h2 className="text-2xl font-bold text-white">
            {currentProfile.name}, {currentProfile.age}
          </h2>
          <p className="text-white/90 mt-2">{currentProfile.bio}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <button className="p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <X className="w-8 h-8 text-gray-600" />
        </button>
        <button className="p-4 bg-rose-500 rounded-full shadow-lg hover:shadow-xl transition-shadow">
          <Heart className="w-8 h-8 text-white" />
        </button>
      </div>
    </div>
  );
}

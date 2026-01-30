import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full h-[76px] px-6 bg-black flex items-center justify-between text-white font-sans">
      {/* Left Section */}
      <div className="flex items-center gap-24">
        {/* Name (Double Layer Tilt Effect) */}
        <div className="relative leading-none">
          <p className="text-base font-medium">Sravani Madaka</p>
          {/* <p className="text-base font-medium transform skew-x-12 opacity-80">
            Nolan Carter
          </p> */}
        </div>

        {/* Role */}
        <p className="text-base font-medium opacity-90">Software Developer</p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        {/* Location + Time */}
        <div className="flex items-center gap-2 text-sm opacity-90">
          <span>Hyderabad</span>
          {/* <span>•</span> */}
          <span className="tabular-nums">10:27 AM</span>
        </div>

        {/* Status Dot */}
        {/* <div className="w-3.5 h-3.5 relative">
          <div className="absolute inset-0 bg-white/20 rounded-full"></div>
          <div className="absolute w-3.5 h-3.5 bg-white rounded-full -translate-y-1/2"></div>
        </div> */}
      </div>
    </nav>
  );
}

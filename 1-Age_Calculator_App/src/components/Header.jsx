import { Calculator, Settings, User } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="bg-background-header w-full h-14 shadow-lg text-white border-b border-border">
      <div className="flex items-center justify-between h-full md:px-14 sm:px-8 px-4">
        {/* Left section */}
        <div className="flex items-center md:gap-3 sm:gap-2 gap-1.5 ">
          <Calculator
            size={18}
            className="text-primary md:w-8 md:h-8 sm:w-7 sm:h-7 w-6 h-6 "
          />
          <h1 className="text-white font-semibold tracking-wide md:text-2xl ">
            Age Calculator
          </h1>
        </div>
        {/* Right Section */}
        <div className="flex items-center md:gap-6 sm:gap-4 gap-2">
          <button className="flex items-center md:gap-2.5 sm:gap-2 gap-1.5 hover:bg-gray-800 md:px-4 md:py-2 rounded-lg hover:text-primary transistion-all duration-200 cursor-pointer "
          aria-label="Setting">
            <Settings
              size={18}
              className="md:w-6 md:h-6 sm:w-5 sm:h-5 w-5 h-5"
            />
            <span className=" hidden md:text-base sm:inline text-sm font-medium capitalize">
              setting
            </span>
          </button>
          <button className="hover:bg-gray-800 md:p-2 sm:p-1.5 rounded-full hover:text-primary transistion-all duration-200 cursor-pointer"
          aria-label="User profile">
            <User />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

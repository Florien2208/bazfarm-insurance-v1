import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import log from "../assets/Group (1).png";
const Header: React.FC = () => {
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex-shrink-0">
          <img src={log} alt="Farm Baza" className="h-10" />
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-green-600">
            Home
          </Link>
          <Link to="/insurance" className="text-gray-700 hover:text-green-600">
            Insurance
          </Link>
          <Link
            to="/investment"
            className=" hover:text-green-600 text-green-600"
          >
            Investment
          </Link>
          <Link to="/funds" className="text-gray-700 hover:text-green-600">
            Funds
          </Link>
          <Link
            to="/financial-institution"
            className="text-gray-700 hover:text-green-600"
          >
            Financial Institution
          </Link>
          <Link to="/bazafarm" className="text-gray-700 hover:text-green-600">
            BazaFarm
          </Link>
          <Link to="/trade" className="text-gray-700 hover:text-green-600">
            Trade
          </Link>
        </nav>

        <div className="relative">
          <button
            onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            className="flex items-center text-gray-700 hover:text-green-600"
          >
            <span className="mr-1">My Account</span>
            <ChevronDown size={16} />
          </button>

          {isAccountDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <Link
                to="/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profile
              </Link>
              <Link
                to="/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Settings
              </Link>
              <Link
                to="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

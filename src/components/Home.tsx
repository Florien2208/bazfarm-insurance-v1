import React from 'react';
import picture from "../assets/Picture1.png";
import log from "../assets/Group (1).png";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src={log}
                  alt="BazaFarm Logo"  
                />
              </div>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <a href="#" className="text-gray-500 hover:text-green-600">
                  Home
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600">
                  Insurance
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600">
                  Investment
                </a>
                <a href="#" className="text-gray-500 hover:text-green-600">
                  Trade
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-500 hover:text-green-600 font-medium"
              >
                My Account
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src={picture}
            alt="Farmer"
          />
          <div className="absolute inset-0 bg-green-500 mix-blend-multiply"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:py-32 sm:px-8 lg:px-10">
          <h1 className="text-4xl font-bold text-white">
            BazaFarm-Connect provides the best way to boost{" "}
            <span className="text-green-200">agriculture</span>
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800">
            About the platform
          </h2>
          <p className="mt-4 text-gray-600">
            BazaFarm connect platform is a platform that will bridge the gap
            between farmers and services such as investment, insurance, and
            funds. With IoT-based data systems, farmers can monitor their fields
            and scale faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

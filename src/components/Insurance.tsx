import React from "react";

const Insurance: React.FC = () => {
  return (
    <div className="bg-green-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <p className="text-green-600 text-center mb-2">INSURANCE</p>
        <h1 className="text-3xl font-bold text-center mb-6">
          FIND INSURANCE THAT FITS YOU
        </h1>

        <div className="flex justify-center space-x-4 mb-8">
          <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
            GET STARTED
          </button>
          <button className="bg-white text-green-500 px-6 py-2 rounded-md border border-green-500 hover:bg-green-50">
            VERIFY
          </button>
        </div>

        <div className="bg-gray-300 h-64 mb-6"></div>

        <p className="text-sm mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sem ex,
          semper ac sapien quis, euismod iaculis dui. Donec semper neque vel
          nunc porttitor, ac hendrerit lorem interdum. Quisque accumsan
          hendrerit aliquet. Aliquam eget felis gravida, lacinia mauris quis,
          bibendum elit. Ut dictum est in orci maximus, tristique suscipit magna
          pulvinar. Nam eget molestie velit. Duis vitae turpis ante. Quisque
          varius mi mattis orci ornare, in vulputate odio porttitor.
          Pellentesque ligula tortor, rhoncus at tincidunt hendrerit, fringilla
          at ipsum. In hac habitasse platea dictumst. Sed hendrerit eros eu ex
          sodales, vel tempor dolor ultrices. Proin sit amet auctor lorem. In
          pretium arcu massa, sed mollis dolor volutpat eu.
        </p>

        <ul className="list-disc pl-5 mb-8">
          <li>Create an account</li>
          <li>
            Answer questions for collection of information to direct you to the
            right insurance for you
          </li>
          <li>
            Get access to the platform to track the progress of you insurance
          </li>
          <li>Use to the platform for payment</li>
        </ul>

        <div className="bg-green-600 text-white p-6 rounded-md">
          <h2 className="text-xl font-bold mb-4">
            GAIN ACCESS TO A FULLY AUTOMATED DASHBOARD TO MONITOR INSURANCE
            STATUS
          </h2>
          <button className="bg-white text-green-600 px-6 py-2 rounded-md hover:bg-green-50 flex items-center">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Insurance;

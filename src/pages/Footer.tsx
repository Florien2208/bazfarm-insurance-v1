import React from "react";
import { Phone, Mail } from "lucide-react";
import log from "../assets/Group (1).png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Request More Information</h2>
          <p className="text-sm text-gray-600">WAY OF THE FUTURE</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="tel:+250788923494"
              className="flex items-center text-sm text-gray-600"
            >
              <Phone size={16} className="mr-2" />
              +250788923494
            </a>
            <a
              href="mailto:info@stexgroup.rw"
              className="flex items-center text-sm text-gray-600"
            >
              <Mail size={16} className="mr-2" />
              info@stexgroup.rw
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-start mb-8">
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <img src={log} alt="Farm Baza" className="h-12" />
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Information</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h3 className="font-bold mb-2">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="font-bold mb-2">Social Media</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-4 flex flex-wrap justify-between items-center text-xs text-gray-500">
          <div className="w-full md:w-auto mb-2 md:mb-0">
            <a href="#" className="mr-4 hover:text-gray-700">
              Terms
            </a>
            <a href="#" className="mr-4 hover:text-gray-700">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-700">
              Cookies
            </a>
          </div>
          <div className="w-full md:w-auto text-center md:text-right">
            © 2022 STEX GROUP • All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

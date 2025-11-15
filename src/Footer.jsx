import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-black mt-35">
        <div className="container xl: mx-auto p-5">
          <footer className="bg-black text-white px-6 py-12 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
              <div>
                <h2 className="text-xl font-semibold mb-4">Exclusive</h2>
                <h3 className="text-lg font-medium mb-2">Subscribe</h3>
                <p className="text-sm mb-4 text-gray-300">
                  Get 10% off your first order
                </p>
                <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent text-sm p-2 flex-grow outline-none"
                  />
                  <button className="px-3 py-2 hover:bg-white hover:text-black transition-all">
                    ➤
                  </button>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Support</h2>
                <p className="text-sm text-gray-300 leading-relaxed">
                  111 Bijoy sarani, Dhaka,
                  <br />
                  DH 1515, Bangladesh.
                </p>
                <p className="text-sm mt-2">exclusive@gmail.com</p>
                <p className="text-sm mt-1">+88015-88888-9999</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Account</h2>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Login / Register
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Cart
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Shop
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Quick Link</h2>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Terms Of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="underline-offset-4 hover:underline transition-all duration-300 ease-in-out text-gray-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Download App</h3>
                <p className="text-xs text-gray-400 mb-2">
                  Save $3 with App New User Only
                </p>
                <div className="flex gap-2 mb-4">
                  <img
                    src="/Footer/Qr Code.png"
                    alt="QR Code"
                    className="w-16 h-16 border border-gray-400 rounded-md"
                  />
                  <div className="flex flex-col justify-center gap-2">
                    <img
                      src="/Footer/Playstore.png"
                      alt="Google Play"
                      className="w-24"
                    />
                    <img
                      src="/Footer/appstore.png"
                      alt="App Store"
                      className="w-24"
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-4 text-gray-400">
                  <FaFacebookF className="cursor-pointer hover:text-white" />
                  <FaTwitter className="cursor-pointer hover:text-white" />
                  <FaInstagram className="cursor-pointer hover:text-white" />
                  <FaLinkedinIn className="cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-10 pt-4 text-center text-sm text-gray-500">
              © 2025 MHS Exclusive. All Rights Reserved.
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;

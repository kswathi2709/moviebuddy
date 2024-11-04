import React from "react";
import {Link} from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="px-2 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
               MovieBuddy
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
  
  );
};






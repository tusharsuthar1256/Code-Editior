import { SquareDashedKanban } from "lucide-react";
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContent";

function Nav() {
  const navigate = useNavigate();
  const { user, logoutUser } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center ">
      <div className="flex items-center justify-between">
        <div className="flex">
          <a href="#">
            <SquareDashedKanban className="h-7 w-7 text-blue-500" />
          </a>
          <span className="ml-2 text-xl font-bold text-white">DeepCode</span>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            aria-label="toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
        } fixed inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center`}
      >
        <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0 lg:justify-center lg:items-center">
          <Link
            smooth={true}
            duration={500}
            to="/"
            className="text-gray-700 transition-colors duration-300 transform lg:mr-12 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                smooth={true}
                duration={500}
                to="/codeeditior"
                className="text-gray-700 transition-colors duration-300 transform lg:mr-12 dark:text-gray-200 dark:hover:text-blue-400 hover:text-blue-500"
              >
                Editior
              </Link>
              <button className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto">
                <Link className="block w-full h-full" onClick={logoutUser}>Log out</Link>
              </button>
            </>
          ) : (
            <button className="block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto">
              <Link to="/login" className="block w-full h-full">
                Get started
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;

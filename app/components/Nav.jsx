// import logo from "../assets/dmsc-logo.png";

// import newLogo from "../assets/newLogo.jpg";
import { Link } from "@remix-run/react";

// import DropDown from "../components/DropDown";

// import Burger from "../components/Burger";

import { useState } from "react";
import Burger from "./Burger";
import Aside from "./Aside";

// import {
//   AcademicCapIcon,
//   BeakerIcon,
//   DocumentArrowUpIcon,
//   EnvelopeIcon,
//   HomeIcon,
//   EyeIcon,
//   PlayIcon,
//   RadioIcon,
//   LanguageIcon,
//   InformationCircleIcon,
//   LifebuoyIcon,
//   BookOpenIcon,
//   PencilIcon,
//   PhotoIcon,
// } from "@heroicons/react/24/outline";

export default function Nav() {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);
  return (
    <>
      <nav className="bg-yellow bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        {/* <section>
          <div className="grid grid-cols-1 p-4">
            <div className="bg-slate-500 rounded-xl p-4">
              <Burger />
              <Aside />
            </div>
          </div>
        </section> */}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            {/* <img
              src={newLogo}
              className="h-12 w-12"
              alt="Darwen Masters Logo"
            /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <Link to="/jump">
              <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Swim with Us
              </div>
            </Link> */}
            {/* <Burger setIsClicked={setIsClicked} isClicked={isClicked} />
            {isClicked ? <h3>Bob</h3> : <h3>Dennis</h3>} */}

            {/* <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-lime-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => console.log("Bob")}
            >
              <span className="sr-only">Open main menu</span> */}
            {/* <a href="#search-aside"> */}
            {/* <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg> */}
            <Burger />
            {/* </a> */}
            {/* </button> */}
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white text-slate-500">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {/* <LifebuoyIcon className="h-6 w-6" /> */}
                  <h1>Home</h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-gray-900 rounded   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {/* <LifebuoyIcon className="h-6 w-6" /> */}
                  <h1 className="text-slate-500">Login</h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/logout"
                  className="block py-2 px-3 text-gray-900 rounded   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {/* <LifebuoyIcon className="h-6 w-6" /> */}
                  <h1>Log Out</h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/members"
                  className="block py-2 px-3 text-gray-900 rounded   md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500  dark:hover:bg-gray-700  md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {/* <EnvelopeIcon className="h-6 w-6" /> */}
                  <h1>Members Area</h1>
                </Link>
              </li>
              <li>
                <SearchToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isClicked ? (
        <section>
          <div className="grid grid-cols-1 text-center bg-yellow-500 h-96 animate-bounce"></div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}

function SearchToggle() {
  return <a href="#search-aside">Click me!!!</a>;
}

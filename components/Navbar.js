import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header class="text-gray-400 sticky top-0 z-40 w-full border-b bg-inherit">
      <div class="container mx-auto my-0 flex py-0 px-16 flex-row items-center sm:justify-between space-x-4 sm:space-x-0 h-16">
        <div class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.0"
            width="30.000000pt"
            height="71.000000pt"
            viewBox="0 0 78.000000 78.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            {" "}
            <g
              transform="translate(0.000000,71.000000) scale(0.100000,-0.100000)"
              fill="#ffffff"
              stroke="none"
            >
              {" "}
              <path d="M248 423 c-38 -20 -68 -39 -68 -42 1 -3 22 -16 48 -28 l47 -23 45 28 c47 29 62 61 40 88 -18 21 -38 17 -112 -23z" />{" "}
              <path d="M462 448 c-7 -7 -12 -24 -12 -38 0 -23 13 -34 105 -84 87 -47 108 -55 125 -46 13 7 20 21 20 38 0 25 -12 35 -96 85 -98 58 -121 66 -142 45z m153 -102 c11 -8 17 -16 12 -16 -8 0 -87 51 -87 57 0 5 51 -22 75 -41z" />{" "}
              <path d="M142 359 c-19 -7 -23 -15 -20 -40 3 -28 13 -37 96 -85 101 -58 121 -63 144 -36 21 23 8 54 -34 79 -118 71 -163 91 -186 82z" />{" "}
              <path d="M498 280 c-35 -22 -48 -36 -48 -53 0 -51 40 -60 100 -22 22 14 43 25 47 25 5 0 16 7 26 14 16 13 14 16 -27 40 -24 14 -46 26 -48 26 -2 0 -24 -14 -50 -30z" />{" "}
            </g>{" "}
          </svg>
          <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} class="mr-5 hover:text-white cursor-pointer">
              Home
            </Link>
            <Link href={"/apply"} class="mr-5 hover:text-white cursor-pointer">
              Apply
            </Link>
          </nav>
        </div>
        <div class="flex space-x-4">
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Profile picture
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

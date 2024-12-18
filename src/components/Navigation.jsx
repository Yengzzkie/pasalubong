import {
  Navbar,
  Collapse,
  Typography,
  IconButton
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col items-center gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
      <Link to={"/"} className="hover:text-yellow-400 lg:text-lg hover:font-semibold">Home</Link>
      <Link to={"/"} className="hover:text-yellow-400 lg:text-lg hover:font-semibold">Menu</Link>
      <Link to={"/"} className="hover:text-yellow-400 lg:text-lg hover:font-semibold">Location</Link>
      <Link to={"/"} className="hover:text-yellow-400 lg:text-lg hover:font-semibold">About</Link>
      <Button className="bg-yellow-400">Online Order</Button>
    </ul>
  );

  return (
    <div className="fixed w-full top-0 z-50">
      <Navbar className="border-none sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent text-white">
        <div className="flex items-center justify-between text-white-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <div className="flex">
              <Link to={"/"} className="text-yellow-400 text-2xl font-semibold">
                <span className="text-yellow-400">Pasalubong</span>
                <span className="text-[#92191E]">905</span>
              </Link>
            </div>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1"></div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-[#ccc] hover:bg-transparent lg:hidden border"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>{navList}</Collapse>
      </Navbar>
    </div>
  );
}

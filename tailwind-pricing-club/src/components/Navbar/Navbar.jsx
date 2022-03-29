import React, { useState } from "react";
import Link from "../Link/Link";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "home", link: "/home" },
    { id: 1, name: "shop", link: "/shop" },
    { id: 1, name: "deals", link: "/deals" },
    { id: 1, name: "contacts", link: "/contacts" },
  ];
  return (
    <nav className="bg-zinc-800 text-white">
      <div onClick={() => setOpen(!open)} className="w-6 h-6 md:hidden">
        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
      </div>
      {/* prettier-ignore */}
      <ul
        className={
          `md:flex
          md:h-20
          justify-center 
          absolute 
          duration-200 
          ease-linear
          bg-zinc-800
          text-white
          text-center
          md:static
          w-full
          ${open ? "top-6" : "top-[-120px]"}`
        }
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

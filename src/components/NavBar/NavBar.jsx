import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    {
      path: "/Banana",
      id: 1,
      name: "Banana",
      price: 0.99,
      category: "Fruit",
      inStock: true,
    },
    {
      path: "/Milk",
      id: 2,
      name: "Milk",
      price: 2.49,
      category: "Dairy",
      inStock: true,
    },
    {
      path: "/Eggs",
      id: 3,
      name: "Eggs",
      price: 1.99,
      category: "Dairy",
      inStock: false,
    },
    {
      path: "/Breasd",
      id: 4,
      name: "Bread",
      price: 1.89,
      category: "Bakery",
      inStock: true,
    },
    {
      path: "/Chicken",
      id: 5,
      name: "Chicken",
      price: 5.99,
      category: "Meat",
      inStock: true,
    },
  ];

  return (
    <nav className="bg-purple-400 px-4">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex absolute md:static duration-500 bg-purple-400 pl-8 pb-4 py-2 ${
          open ? "top-6" : "-top-48"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

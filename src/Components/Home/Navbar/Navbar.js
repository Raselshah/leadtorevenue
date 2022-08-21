import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import control from "../../../Assest/control.png";
import logo from "../../../Assest/logo.png";
import home from "../../../Assest/216242_home_icon.png";
import SideNav from "./SideNav";
import AddCustomer from "../AddCustomer/AddCustomer";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    {
      title: "DASHBOARD",
      link: "/",
      src: "https://i.ibb.co/5Bcy4gS/216242-home-icon.png",
    },
    {
      title: "MENU ITEM 3",
      link: "/",
      src: "https://i.ibb.co/gRNF0k6/8678808-article-fill-icon.png",
    },
    {
      title: "MENU ITEM 4",
      link: "/",
      src: "https://i.ibb.co/gdZxJkG/353442-bookmark-circle-favorite-star-favorites-icon.png",
    },
    {
      title: "MENU ITEM 5",
      link: "/",
      src: "https://i.ibb.co/gdZxJkG/353442-bookmark-circle-favorite-star-favorites-icon.png",
    },
  ];
  return (
    <div className="flex">
      <div
        className={`sticky top-0 ${
          open ? "w-64" : "w-20 "
        } bg-gray-200  h-screen sticky top-0 p-5  pt-8  duration-300 border-r-2 border-accent `}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-24 w-7 border-slate-800
         border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=""
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li key={index}>
              <Link
                to={Menu.link}
                key={index}
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-600 text-sm items-center gap-x-4 
             ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"} `}
              >
                <img title={Menu.title} src={Menu?.src} alt="" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200 `}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <SideNav />
        <AddCustomer />
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;

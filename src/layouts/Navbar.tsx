import React from "react";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="lg:container md:w-[90%] w-[90%] mx-auto flex justify-between items-center">
      <Link to="/">
        <img className="h-16" src={logo} alt="" />
      </Link>
      <div className="flex items-center justify-center gap-4">
        <div className="text-2xl">
          <AiOutlineShoppingCart />
        </div>
        <Link to="/all-books" className="text-2xl">
          <MdOutlineProductionQuantityLimits />
        </Link>
        <Link to='/registration' className="text-2xl">
          <RiAccountCircleLine />
        </Link>
        <div className="text-2xl">
          <MdOutlineLogin />
        </div>
      </div>
    </div>
  );
}

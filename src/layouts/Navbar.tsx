/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdOutlineLogin } from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "../redux/features/cart/cartSlice";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { setUser } from "../redux/features/user/userSlice";

export default function Navbar() {
  const [cart, SetCart] = useState<boolean>(false);
  const { books, total } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const handleLogout = async() => {
    await signOut(auth).then(() => {
      dispatch(setUser(null));
    });
  };


  return (
    <>
      <div className="lg:container md:w-[90%] w-[90%] mx-auto flex justify-between items-center relative">
        <Link to="/">
          <img className="h-16" src={logo} alt="" />
        </Link>
        <div className="flex items-center justify-center gap-4">
          <div onClick={() => SetCart(!cart)} className="text-2xl">
            <AiOutlineShoppingCart />
          </div>

          <Link to="/all-books" className="text-2xl">
            <MdOutlineProductionQuantityLimits />
          </Link>
          {!user.email && (
            <>
              {" "}
              <Link to="/login" className="text-2xl">
                <RiAccountCircleLine />
              </Link>
            </>
          )}
          {user.email && (
            <>
              <div onClick={handleLogout} className="text-2xl">
                <MdOutlineLogin />
              </div>
            </>
          )}
        </div>
      </div>
      {cart && (
        <div className="bg-blue-300 w-80 absolute right-0 top-0 h-[400px]  stickey mt-16 z-50 p-4 mr-4">
          <>
            {books.map((book) => (
              <div className="flex items-center gap-3">
                <p className="uppercase">{book.tittle}</p>
                <p>Quantity:{book.quantity}</p>
                <button
                  onClick={() => dispatch(addToCart(book))}
                  className="btn bg-black rounded-full p-2 text-white hover:bg-none hover:text-black"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(removeOne(book))}
                  className="btn bg-black rounded-full p-2 text-white hover:bg-none hover:text-black"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(book))}
                  className="btn bg-black rounded-full p-2 text-white hover:bg-none hover:text-black"
                >
                  Delete
                </button>
              </div>
            ))}
          </>
          <p>Total: {total}</p>
        </div>
      )}
    </>
  );
}

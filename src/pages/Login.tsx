import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { loginUser } from "../redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { user, isLoading } = useAppSelector((state) => state.user);
  const navigate = useNavigate()

  useEffect(()=>{
    if(user.email && !isLoading) {
      navigate('/')
    }
  },[isLoading, user.email])


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform login logic here using the formData

    setFormData({
      email: "",
      password: "",
    });
    dispatch(loginUser(formData));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96 space-y-6"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold py-2 rounded-md hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-colors"
        >
          Login
        </button>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <a href="/registration" className="text-blue-500 font-medium">
            Create new account
          </a>
        </p>
      </form>
    </div>
  );
}

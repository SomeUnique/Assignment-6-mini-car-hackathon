"use client";
import React from "react";

const Navbar =()=>{
    return(
        <div>
            <div className="bg-black text-white h-22 w-full  py-5 px-5 flex flex-row justify-between items-center">
          <div>
            <img
             src ="black logo.png"
             className="w-13 h-14"
             />
             <h1 className="text-2xl font-semibold">
                <a href="#!"></a>
             </h1>
          </div>
          <div>
            <ul className="flex space-x-5">
                <li><a href="/" className="hover:text-red-600">Search</a></li>
                <li><a href="/" className="hover:text-red-600">New Cars</a></li>
                <li><a href="/" className="hover:text-red-600">Auto Store</a></li>
                <li><a href="/" className="hover:text-red-600">Bikes</a></li>
                <li><a href="/" className="hover:text-red-600">Videos</a></li>
                <li><a href="/" className="hover:text-red-600">Forms</a></li>
                <li><a href="/" className="hover:text-red-600">Contact</a></li>
                <li><a href="/" className="hover:text-red-600">Booking</a></li>
            </ul>
          </div>
          <div className="flex flex-row py-3 px-3 ">
            <ul className='flex space-x-5'></ul>
            <li className=""><a href="#!">Login</a></li>
            <li className=""><a href="#!">Sign Up</a></li>
            <button className=" bg-red-600 text-white rounded-lg py-4 px-10 justify-center">Post Add Here </button>
          </div>
        </div>
        </div>
    )
}
export default Navbar
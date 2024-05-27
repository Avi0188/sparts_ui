import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-end item-center bg-[#497280] text-white font-bold p-5 text-10 mr-5 w-[100%]">
     <span className="ml-5 mr-8 pt-3 hover:text-blue-500 cursor-pointer">Our Customers</span>
<span className="ml-5 mr-8 pt-3 hover:text-blue-500 cursor-pointer">SpArts Advantage</span>
<span className="ml-5 mr-8 pt-3 hover:text-blue-500 cursor-pointer">Contact Us</span>
    </div>
  );
};

export default Navbar;
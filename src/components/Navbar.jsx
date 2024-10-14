import logo from "../../public/logo 1.png";
import categoryGroup from "../../public/Group 1.png";
import searchIcon from "../../public/search.png";
import account from "../../public/account.png";
import favourite from "../../public/favorite.png";
import cart from "../../public/shopping_cart.png";
import ico from "../../public/ico.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* parent div */}
      <div className="flex w-full  justify-between items-center border-b-2 relative ">
        {/* child div 1*/}
        <div className="flex items-center w-[500px] justify-center gap-16 py-5 relative bg-[#2BB673] px-6">
          {/* image div */}
          <div className="w-[167px] h-[48px]">
            <img src={logo} alt="company logo" />
          </div>
          {/* category div */}
          <div className="flex items-center gap-2 ">
            <h1 className="text-white font-normal">All Categories</h1>
            <img
              src={categoryGroup}
              alt="Categories"
              onClick={toggleDropdown}
              className="cursor-pointer ml-3"
            />
          </div>
        </div>
        {/* child div 2*/}
        <div className="flex items-center justify-center ml-3 gap-5 ">
          <input placeholder="Looking for something ?" className="w-[20rem]" />

          <img src={searchIcon} alt="search icon" />
        </div>
        {/* child div 3*/}
        <div className="flex items-center justify-center gap-10 border-l-2 p-2">
          <div className="flex text-xs gap-2">
            <img src={account} alt="account" />
            <div className="flex flex-col">
              <h1>Sign in</h1>
              <h1>My Account</h1>
            </div>
          </div>
          <div className="flex text-xs gap-2">
            <img src={favourite} alt="" />
            <div className="flex flex-col">
              <h1>Reorder</h1>
              <h1>My items</h1>
            </div>
          </div>
          <div className="flex flex-col bg-[#EAF5F2] p-2 px-4 rounded-md">
            <img src={cart} alt="cart img" />
            <p>0.00</p>
          </div>
        </div>
      </div>

      {/* second parent div */}
      <div className="flex justify-between gap-8 text-sm font-normal border-b-2">
        {/* child1 */}
        <div className="flex items-center  gap-2 ml-32 ">
          <div className="flex gap-2 items-center justify-center text-center">
            <img src={ico} alt="offers" />
            <h1>Offers</h1>
          </div>
          <div className="border-l-2">
            <h1 className="ml-2">Store location</h1>
          </div>
        </div>
        {/* child 2 */}
        <div className="flex justify-end gap-10 mx-2 py-5 ">
          <p>Health & Beauty</p>
          <p> Home Decor</p>
          <p>Seasonal Products</p>
          <p>Fashion</p>
          <p>Digital Accessiories</p>
          <p>Bags</p>
        </div>
      </div>

      {/* dropdown */}
      {isOpen && (
        <div className="absolute top-16  h-[100px] bg-white right-0 mt-5 left-60 mx-4 w-48 border-2 rounded-md">
          <div className="flex flex-col gap-3 items-center justify-center hover:cursor-pointer w-full">
            <p className="hover:bg-gray-100 w-full text-center">Home Decor</p>
            <p className="hover:bg-gray-100 w-full text-center">Electronics</p>
            <p className="hover:bg-gray-100 w-full text-center">TV</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
//import Chat from './Chat';

const Navbar = ({ searchTerm, setSearchTerm, user }) => {  
  const navigate = useNavigate();

  if (user) {
    return (
      <div className=" bg-white bg-cover flex gap-2 w-full pb-7 ">
        <div className="flex justify-start items-center w-full ml-5 mt-5 px-2 rounded-md bg-purple border-none outline-none focus-within:shadow-sm">
          <IoMdSearch fontSize={30} className="ml-1 " />
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            value={searchTerm}
            onFocus={() => navigate('/search')}
            className="mr-2 p-2 w-full bg-purple outline-none text-black placeholder-black rounded-lg"
          />
        </div>
        <div className="flex gap-3 mt-5 ">
        
          <Link to={`user-profile/${user?._id}`} className="hidden md:block">
            <img src={user.image} alt="user-pic" className="w-14 h-12 rounded-full " />
          </Link>
          <Link to="/create-pin" className="bg-black text-white rounded-full w-12 h-12 md:w-14 md:h-12 flex justify-center items-center">
            <IoMdAdd />
          </Link>
        </div>
      </div>
    );
  }

  return null;
};
// this
export default Navbar;

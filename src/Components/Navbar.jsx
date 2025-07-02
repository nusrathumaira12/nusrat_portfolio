import React from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import logo from '../assets/Nlogo.png';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const links = (
    <>
      <li><NavLink smooth to="/#home" className="font-bold">Home</NavLink></li>
      <li><NavLink smooth to="/#about" className="font-bold">About Me</NavLink></li>
      <li><NavLink smooth to="/#skills" className="font-bold">Skills</NavLink></li>
      <li><NavLink smooth to="/#projects" className="font-bold">Projects</NavLink></li>
      <li><NavLink smooth to="/#contact" className="font-bold">Contact</NavLink></li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 bg-base-200 px-2 md:px-20">
      <div className="navbar-start flex items-center">
       
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

       
        <img src={logo} alt="Logo" className="w-25 md:w-28 object-cover" />
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

    
      <div className="navbar-end">
        <a
          href="/Email Writing Task (1) 2.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline bg-white text-amber-500"
        >
          Resume
          <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default Navbar;

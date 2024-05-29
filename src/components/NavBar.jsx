import logo from '../assets/NR.png'
import React from 'react'
import {FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import {FaSquareXTwitter } from 'react-icons/fa6'

function NavBar() {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-12' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex items-center gap-4 text-2xl'>
            <FaLinkedin />
            <FaGithub />
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  );
};

export default NavBar;
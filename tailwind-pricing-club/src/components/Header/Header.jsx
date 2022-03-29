import React from 'react';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-indigo-200'>
        <h2 className='text-2xl'>save most of your money</h2>
        <p>by giving your money ot me</p>
      </div>
    </div>
  );
};

export default Header;
import React from 'react';

const Header = () => {
  return (
    <div className='d-flex justify-content-between align-items-center mb-4'>
      <div>
        <h1>logo</h1>
      </div>
      <nav>
        <a href="/home" className='ms-4'>Home</a>
        <a href="/about" className='ms-4'>About</a>
        <a href="/signup" className='ms-4'>Signup</a>
      </nav>
    </div>
  );
};

export default Header;
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../navbar/Navbar';
import LogoDark from '../logo/LogoDark';

const Header_01 = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className='site-header site-header--absolute is--white py-3'
      id='sticky-menu'
    >
      <div className='global-container'>
        <div className='flex items-center justify-between gap-x-8'>
          {/* Header Logo */}
          <LogoDark />
          {/* Header Logo */}
          {/* Header Navigation */}
          <Navbar mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
          {/* Header Navigation */}
          {/* Header User Event */}
          <div className='flex items-center gap-6'>
            {/* <Link
              href='/home/login'
              className='button hidden rounded-[50px] border-[#7F8995] bg-transparent text-black after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block'
            >
              Login
            </Link> */}
            <Link
              href='/'
              className='button hidden rounded-[50px] border-black bg-black text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white lg:inline-block'
              prefetch={true}
              // Replace with this onClick handler
              onClick={(e) => {
                e.preventDefault();
                // Use a full page reload to clear any CSS conflicts
                window.location.href = '/';
              }}
            >
              Chat For free
            </Link>
            {/* Responsive Off-canvas Menu Button */}
            <div className='block lg:hidden'>
              <button
                onClick={() => setMobileMenu(true)}
                className='mobile-menu-trigger is-black'
              >
                <span />
              </button>
            </div>
          </div>
          {/* Header User Event */}
        </div>
      </div>
    </header>
  );
};

export default Header_01;

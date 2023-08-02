import React from 'react';
import { useEffect, useRef } from 'react';
import logo from '../../assets/images/logo-no-background.png';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/users',
    display: 'Find a flight'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className="container">
        <div className='flex items-center justify-between'>
          { /* ======= Logo ========= */}
          <div >
            <img
              width={100}
              height={70}
              src={logo}
              alt='logo'
            />
          </div>

          {/* ========= Menu ========= */}
          <div className='navigation'>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => <li key={index}>
                  <NavLink to={link.path}
                    className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                      : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'}>{link.display} </NavLink>
                </li>)
              }
            </ul>
          </div>

          {/*========= Nav right ====== */}
          <div className='flex items-center gap-4'>

            <div>
              <Link to='/'>
                  <figure>
                    <img src='' alt='' />
                  </figure>
              </Link>
            </div>

          </div>

        </div>
      </div>

    </header>
  )
}

export default Header
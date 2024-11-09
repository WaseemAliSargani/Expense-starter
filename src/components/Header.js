import React, { useState, useEffect, } from 'react';
// import data
import { header } from "../data"
// import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi"
// import conponents
import MobileNav from "../components/MobileNav"
import Nav from "../components/Nav"

const Header = () => {
  // mobile nav state
  const [mobileNav, setmobileNav] = useState(false)
  // Header state
  const [isActive, setIsActive] = useState(false);
  // destructure header data
  const { logo, btnText } = header;
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  }, [])

  return (
    <>
    {/* you can use TOP Scroll bar Animation   <div style={{ transformOrigin: "left" }} className='w-full bg-accent h-2' ></div> */}
  <header className={`${isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-[60px]"} py-6 lg:py-4 fixed w-full transition-all z-10 `}
  >
    <div className="container mx-auto flex justify-between items-center">
      {/* Logo */}
      <a href="/Home" data-aos="fade-down" data-aos-delay="700">
        <img src={logo} alt="" />
      </a>
      {/* nav - initially hidden  - show on desktop mode */}
      <div className='hidden lg:flex' data-aos="fade-down" data-aos-delay="1100">
        <Nav />
      </div>
      {/* cta button - initally hidden - show on desktop mode  */}
      <button data-aos="fade-down" data-aos-delay="1200" className='btn btn-sm btn-outline hidden lg:flex'> {btnText} </button>
      {/* mobile nav trigger btn - hidden on desktop */}
      <button className='lg:hidden' onClick={() => setmobileNav(!mobileNav)}>
        {mobileNav ? (
          <HiOutlineX className='text-3xl text-accent' />
        ) : (
          <HiMenuAlt4 className='text-3xl text-accent' />
        )}
      </button>
      {/* mobile nav - hidden on desktop  */}
      <div className={`${mobileNav ? "left-0" : "-left-full"
        } fixed top-0 bottom-0  w-[60vw] lg:hidden transition-all`}>
        <MobileNav />
      </div>
    </div>
  </header>
  </>);
};

export default Header;

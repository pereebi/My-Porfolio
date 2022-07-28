import React, { useState } from 'react'
import MobileNav from './MobileNav'

const NavBar = ({ page , handlePageChange }) => {
  const [navClicked, setNavClicked] = useState(false);
  return (
    <>
      <nav className='w-[100%] h-[64px] px-[14%] flex justify-between items-center shadow-sm sticky top-0 bg-white sm:sticky sm:top-0 '>
          <h1 className='font-semibold'>Pere-ebi Egbekun</h1>
          <ul className='flex justify-between items-center sm:hidden'>
            <li onClick={() => handlePageChange("home")} className={page === "home" ? 'mx-4 font-semibold cursor-pointer' : "mx-4 cursor-pointer"}>Home</li>
            <li onClick={() => handlePageChange("resume")} className={page === "resume" ? 'mx-4 font-semibold cursor-pointer' : "mx-4 cursor-pointer"}>My Resume</li>
            <li onClick={() => handlePageChange("contact")} className={page === "contact" ? 'mx-4 font-semibold cursor-pointer' : "mx-4 cursor-pointer"}>Contact</li>
          </ul>
          {navClicked === false && <div className='hidden sm:flex cursor-pointer' onClick={() => setNavClicked(!navClicked)}>
            <i class="lni lni-menu"></i>
          </div>}
          {navClicked && <div className='hidden sm:flex cursor-pointer' onClick={() => setNavClicked(!navClicked)}>
            <i class="lni lni-close text-red-400"></i>
          </div>}

      </nav>
      
      {navClicked && <MobileNav page={page} handlePageChange={handlePageChange} navClicked={navClicked} setNavClicked={setNavClicked}/>}
    </>
    
  )
}

export default NavBar
import React from 'react'

const MobileNav = ({page, handlePageChange, navClicked, setNavClicked}) => {
  return (
    <div className='hidden sm:flex sticky top-0 bg-white px-[14%] py-5'>
        <ul className='flex flex-col items-end justify-end w-full'>
            <li className={page === "home" ? 'font-semibold my-1 cursor-pointer': "my-1 cursor-pointer"} onClick={()=> 
                {
                    handlePageChange("home")
                    setNavClicked(!navClicked)
                }}>Home</li>
            <li className={page === "resume" ? 'font-semibold my-1 cursor-pointer': "my-1 cursor-pointer"} onClick={()=>{
                     handlePageChange("resume")
                     setNavClicked(!navClicked)
            }}>My Resume</li>
            <li className={page === "contact" ? 'font-semibold my-1 cursor-pointer': "my-1 cursor-pointer"} onClick={()=> 
                {
                    handlePageChange("contact")
                    setNavClicked(!navClicked)
                }
                }>Contact</li>
        </ul>
    </div>
  )
}

export default MobileNav
import React from 'react'

const Footer = () => {
  return (
    <footer className='  pt-[200px] sm:pt-[100px]'>
        <div className='w-full flex justify-center items-center'>
            <a className='mx-4' href="https://www.linkedin.com/in/pere-ebi-egbekun-32854510b/"><img src="./linkedIn.png" alt="" /></a>
            <a className='mx-4' href="https://twitter.com/ebi_lola"><img src="./twitter.png" alt="" /></a>
            <a className='mx-4' href="https://www.instagram.com/per_eebi/?hl=en"><img src="./instagram.png" alt="" /></a>
            <a className="text-2xl mx-4 lni lni-github-original" href='https://github.com/pereebi'><img alt=''/></a>        
            </div>
        <p className='text-center my-4 text-[#666666]'>pereebiegbekun@gmail.com</p>
        
            <hr />
            
            <div className='py-5 w-full text-center text-[16px] sm:text-[14px] sm:px-4'> &copy; 2022 Pere-ebi Victoria Egbekun. All rights reserved.</div>
    </footer>
  )
}

export default Footer
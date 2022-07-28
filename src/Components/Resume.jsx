import React from 'react'

const Resume = () => {
  return (
    <section className='w-full py-4'>
        <div className='mt-16 flex justify-center'>
            <img src="./perebi2.0.png" className='sm:w-[80%]' alt="" />
        </div>
        <div className='mt-10 w-full flex justify-center'>
            <a className='bg-black text-white w-[185px] h-[56px] rounded-md flex justify-center items-center sm:w-[148px] sm:h-[44.8px] sm:text-sm' href="./Egbekun Tech Resume.pdf" download>Download CV</a>
        </div>
    </section>
  )
}

export default Resume
import React from 'react'

const Homepage = ({ handlePageChange }) => {
  return (
    <main className='w-full'>
    <section className='flex flex-col text-center  w-[55%] 2xl:w-[60%] mx-auto py-24 md:w-[80%]'>
        <div className='w-full flex justify-center mb-6'>
            <img className='rounded-full shadow-2xl w-[15%]' src="./profilepicture.jpg" alt="profile-img" />
        </div>
        <h1 className='text-[24px] font-semibold sm:text-[20px]'>Hi there ✌, I'm Pere-ebi</h1>
        <h1 className='text-[40px] font-bold px-5 leading-tight mb-5 sm:text-[25px] sm:mt-2'>I build Web API's with a detail-oriented and proficient approach.</h1>
        <p className='text-[16px] px-5 text-[#333333] sm:text-[14px]'>I am a Backend Software Developer. I am a goal-oriented and highly motivated individual with a reputation of being persistent, adaptable, meticulous, creative, self driven. I am curious about how things work, committed to lifelong learning and I am on a path to mastering Back-end Engineering and Web Api Design.</p>
        <div className='mt-8'>
            <button 
            onClick={() => handlePageChange("contact")}
            className='bg-black text-white w-[185px] h-[56px] rounded-md sm:w-[148px] sm:h-[44.8px] sm:text-sm'>Contact Me</button>
        </div>
    </section>
    <section className='flex flex-col text-center  w-[55%] 2xl:w-[60%] mx-auto lg:w-[80%]' >
        <div>
            <h1 className='text-[24px] font-bold text-left md:text-center'>PROJECTS</h1>
            <p className='text-left md:text-center text-[16px]'>Here are some of the projects I have worked on and I'm glad to share them with you 😁.</p>
            <div className='mt-10 grid grid-cols-2 gap-8 md:grid-cols-1 place-items-center'>
                {/* VBANK PROJECT */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./GalleryOneLogo.jpeg" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#FFEDF8] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Gallery One App</span>- An Auction App</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d] xl:text-[14px]'>An app to help users upload products and clients can bid for the products. The highest bidder takes it home.</p>
                        </div>
                        <a target= '_blank' rel="noreferrer"  href='https://github.com/samtechnet/Gallery-one-app' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold xl:text-[14px]'>View Case study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" /> 
                        </a>
                    </div>
                </div>
                {/* FATB */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./Storefront API.jpg" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#EBEBFF] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Storefront Backend API</span>- An API for a Storefront</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d]  xl:text-[14px]'>Built a backend for a store front where API's were created to: Sign up and login as a user Create, update and delete products Create and delete an order and Add products to the cart.</p>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/pereebi/Milestone-2' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold  xl:text-[14px]'>View Case study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" />

                        </a>
                    </div>
                </div>
                {/* OKRIKA */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./Image Processing API.jpeg" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#EBF5FF] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Image Processing API</span>- An Image Processing API.</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d] xl:text-[14px]'>An image processing API with the sharp library to help a user resize the images inputed.</p>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://github.com/pereebi/Milestone' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold xl:text-[14px]'>View Case study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" />

                        </a>
                    </div>
                </div>
                {/* {KK} */}
                <div className='flex flex-col h-[560px] w-[417px] rounded-lg xl:h-[448px] xl:w-[333.6px]'>
                    <img src="./festival image.jpeg" alt="" className='h-1/2 w-full object-center' />
                    <div className='w-full h-1/2 bg-[#EBFFFA] flex flex-col justify-between py-4'>
                        <div className='px-8 text-left'>
                            <h1 className='text-[24px] xl:text-[16px]'><span className='font-semibold'>Landing Page</span>- An events planning landing page.</h1>
                            <p className='mt-2 text-[16px] text-[#4d4d4d] xl:text-[14px]'>An events planning landing page for a prospective website.</p>
                        </div>
                        <a target='_blank' rel="noreferrer" href='https://pereebi.github.io/Landing-Page/' className='px-8 py-12 text-left flex'>
                            <h1 className='text-[16px] font-semibold xl:text-[14px]'>View Case Study</h1>
                            <img className='ml-4' src="./chevron.png" alt="button" />

                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  )
}

export default Homepage
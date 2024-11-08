import React from 'react'
import Header from '@/components/header/page'
import Image from 'next/image'
import Footer from '@/components/footer/page'
const page = () => {
  return (
    <div className='min-h-screen flex flex-col '>
     <Header></Header>
      <div className='flex flex-col md:flex-row h-full'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start p-6 md:p-12 '>
          <h1 className='text-blue-600 text-4xl md:text-5xl font-bold'>We satisfy with your comfortness
          </h1>
          <p className='text-slate-600 text-base md:text-lg w-full md:w-[571px] my-2'>At out travel agency we are passionate about creating unforgettable journeys with a commitment to personalized service</p>
          <button className='text-white bg-blue-500 w-full md:w-[237px] h-[50px] md:h-[66px] mt-4 md:mt-6'>Contact US</button>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center p-4 md:p-2 '>
          <Image
           src={"/images/pass.png"}
           alt='this is a photo you know'
           width={502}
           height={465}
           className='w-full h-full md:h-[465px]'
           
           
           
           />
       
        
        </div>
        




      </div>
      <Footer></Footer>

    </div>
  )
}

export default page
